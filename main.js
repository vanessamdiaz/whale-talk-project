const input = 'Turpentine and Turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
    const letter = input[i].toLowerCase(); 

    if (letter ==='e' || letter === 'u') {
        resultArray.push(letter);
    }

    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels[j];

        if (letter === vowel) {
            console.log(letter);
            resultArray.push(letter);
        }
    }
}

const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
