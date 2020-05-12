// Small project of Codecademy.com: Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

const input = 'Hello How are you? Are you OK?';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log("inputIndex = " + input[inputIndex]);
  for (let vowel = 0; vowel < vowels.length; vowel++){
    if (input[inputIndex] === vowels[vowel]){
      if(input[inputIndex] === 'e'){
        resultArray.push('ee')
      }
      else if (input[inputIndex] === 'u') {
        resultArray.push('uu')
      }
      else {
        resultArray.push(input[inputIndex])
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());


