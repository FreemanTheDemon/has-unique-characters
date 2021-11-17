// Write your code below
function hasUniqueChars(word) {
    // declare a boolean outside of the for loop so that it doesn't get reset
    let hasUnique = true;
    // iterate over the length of the word 
    for (let i = 0; i < word.length; i++) {
        // helper variable for readability
        let currentChar = word[i];
        // for each character we come to, we iterate over the word again so we can compare to each other character in the word
        for (let j = 0; j < word.length; j++) {
            // another helper var
            let innerChar = word[j];
            // as long as the characters are not the same
            if (i !== j) {
                // if we find a duplicate char
                if (currentChar === innerChar) {
                    // set hasUnique to false
                    hasUnique = false;
                }
            }
        }
    }

    // return either true or false
    return hasUnique;
}

console.log(hasUniqueChars('Monday'));

function hasUniqueCharsSet(word) {
    let uniqueChars = new Set([]);
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i]);
    }
    return uniqueChars.size === word.length;
}

console.log(hasUniqueCharsSet('Monday'));