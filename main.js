var input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const vowel = input[i]; 

    for (let j = 0; j < vowels.length; j++) {
        const whale = vowels[j];

        if (input == 'e') {
            resultArray.push(input[i]);
        }
    }
}
console.log(vowels);
console.log(resultArray);
