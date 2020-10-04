import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BandInputDTO } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";

export class BandController {
    
    private static bandBusiness = new BandBusiness(
        new BandDatabase(),
        new IdGenerator(),
        new Authenticator()
     );

    async addBand(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string;
            await BandController.bandBusiness.get(token)
            
            const input: BandInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            }

            await BandController.bandBusiness.addBand(input)

            res.status(200).send({ 
                message: "Banda registada com sucesso"
             });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}