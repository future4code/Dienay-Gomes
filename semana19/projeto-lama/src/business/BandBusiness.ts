import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BandDatabase } from "../data/BandDatabase";
import { BandInputDTO } from "../model/Band";
import { BandController } from "../controller/BandController";

export class BandBusiness {
    
    constructor(
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager ,
        private authenticator: Authenticator
     ){}

    async addBand(band: BandInputDTO) {

        const id = this.idGenerator.generate();

        await this.bandDatabase.addBand(id, band.name, band.music_genre, band.responsible);

        return "Banda adicionada com sucesso"
    }

    async get(token:string){
        const authenticator = new Authenticator();
        const authenticationData = authenticator.verify(token);
        const userId = authenticationData.id;

        const feedDatabase = new FeedDatabase();
        const feed = await feedDatabase.getFeed(userId);
        const mappedFeed = feed.map((item:any)=>({
            title: item.title,
            photoPost: item.photoPost,
            description: item.description
        }))

        return mappedFeed
    }
}