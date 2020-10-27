//  Exercício 1
// const findFirstRecurringCharacter = (input: string): string | null => {
//     const charHashMap: { [index: string]: boolean } = {};
//     for (const char of input) { // n
//       if (charHashMap[char] === true) { // 1
//         return char;
//       }
//       charHashMap[char] = true;
//     }
//     return null;
//   };
// O(n)
// //   Exercício 2
const func = (source, comparison) => {
    if (comparison.length > source.length + 1 || //1
        comparison.length < source.length - 1) {
        return false;
    }
    let commonCharQuantity = 0;
    for (const char of comparison) {
        if (source !== comparison) {
            commonCharQuantity++;
        }
    }
    return (commonCharQuantity <= source.length + 1 &&
        commonCharQuantity >= source.length - 1);
};
console.log(func("aquilo", "isso"));
// //   Exercício 3
// export const replaceMatrixValue = (
//     matrix: number[][],
//     rowIndex: number,
//     columnIndex: number,
//     value: number
//   ): void => {
//     if (
//       matrix[rowIndex] === undefined ||
//       matrix[rowIndex][columnIndex] === undefined
//     ) {
//       throw new Error("Fora do intervalo da matriz");
//     }
//     matrix[rowIndex][columnIndex] = value;
//   };
// //   Exercício 4
// function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
//     for (let i = 0; i < listOfNumbers.length; i++) {
//       if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
//         return true;
//       }
//     }
//     return false;
//   }
// //   Exercício 5
