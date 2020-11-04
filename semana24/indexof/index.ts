const simulaIndexOf = (string: string, caracter: string): number => {
    const palavra: string = string;
    const letra: string = caracter;
    let index: number = 0;

    for(let i of palavra){
        if(i === letra) {
            return index
        }
        index++
    }
}

console.log(simulaIndexOf("palavra", "p"))
console.log(simulaIndexOf("palavra", "a"))
console.log(simulaIndexOf("palavra", "l"))