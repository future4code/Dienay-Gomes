const stringCompression = (input: string): string => {
    const substrings: string[] = [];
    let lastChar = input[0];
    let charCount = 0;
    console.log(substrings)
    console.log(lastChar)
    console.log(charCount)
  
    for (const char of input) {
      if (char !== lastChar) {
        substrings.push(lastChar + charCount);
        lastChar = char;
        charCount = 0;
      }
      charCount++;
    }
    console.log(substrings)
    console.log(lastChar)
    console.log(charCount)
  
    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
      result += key;
    }
    console.log(substrings)
    console.log(lastChar)
    console.log(charCount)
  
    return result.length > input.length ? input : result;
  };

  console.log(stringCompression("accuraaaaaaaaaate"))