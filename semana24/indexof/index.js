const simulaIndexOf = (string, caracter) => {
    const palavra = string;
    const letra = caracter;
    let index = 0;
    for (let i of palavra) {
        if (i === letra) {
            return index;
        }
        index++;
    }
};
console.log(simulaIndexOf("palavra", "p"));
console.log(simulaIndexOf("palavra", "a"));
console.log(simulaIndexOf("palavra", "l"));
