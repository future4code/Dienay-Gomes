//  Exercício 1
// O(n)
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

//  Exercício 2
// O(n)
// const func = (
//     source: string,
//     comparison: string
//   ): boolean => {
//     if (
//       comparison.length > source.length + 1 || //1
//       comparison.length < source.length - 1
//     ) {
//       return false;
//     }
//     let commonCharQuantity = 0;
  
//     for (const char of comparison) { //n
//       if (source !== comparison) { //1
//         commonCharQuantity++;
//       }
//     }
//     return (
//       commonCharQuantity <= source.length + 1 &&
//       commonCharQuantity >= source.length - 1
//     );
//   };

//  Exercício 3
// O(1)
// const replaceMatrixValue = (
//     matrix: number[][],
//     rowIndex: number,
//     columnIndex: number,
//     value: number
//   ): void => {
//     if (    //1
//       matrix[rowIndex] === undefined ||
//       matrix[rowIndex][columnIndex] === undefined
//     ) {
//       throw new Error("Fora do intervalo da matriz");
//     }
  
//     matrix[rowIndex][columnIndex] = value;
//   };

//   Exercício 4
// O(n²)
// function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
//     for (let i = 0; i < listOfNumbers.length; i++) {    //n
//       if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {  //n
//         return true;
//       }
//     }
//     return false;
 // }
//  Exercício 5
// 3, 1, 2 e 4