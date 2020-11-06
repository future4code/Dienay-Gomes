const maiorPrefixoComum = (array: string[]): string => {
    if(array.length === 0) return ""

    let prefixoComum = ""
    for(let i = 0; i < array[0].length; i++) {
        let caracterAtual = array[0][i]
        let areAllCharsSame = true

        for(let j = 0; j < array.length; j++) {
            if(array[j][i] !== caracterAtual) {
                return prefixoComum
            }
        }

        if(caracterAtual) {
            prefixoComum += caracterAtual
        }
    }
    return prefixoComum
}

console.log(maiorPrefixoComum(["flower","flow","flight"]))
console.log(maiorPrefixoComum(["dog","racecar","car"]))
console.log(maiorPrefixoComum(["coracao","cor","corona","coreia"]))
console.log(maiorPrefixoComum(["coracao","co","corona","coreia"]))

