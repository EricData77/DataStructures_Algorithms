string = "abcbdaac"

const longestUniqueStringBF = function(string) {
    if (string.length <= 1) return string.length;
    let longest = 0;
    // TWO POINTERS + HASHMAP
    for (let left = 0; left < string.length; left ++) {
        // HashMap to store character after each looping
        let seenCharacter = {}, currentLength = 0;
        for (let right = left; right < string.length; right ++) {
            const currentChracter = string[right];
            if (!seenCharacter[currentChracter]) {
                currentLength ++;
                seenCharacter[currentChracter] = true;
                longest = Math.max(longest, currentLength);
            }
            else {
                break;
            }    
        }
    }
    return longest;
}
// SLIDING WINDOW METHOD
const longestUniqueStringOP = function(string) {
    if (string.length <= 1) return string.length;

    // let seenCharacter = {};
    let seenCharacter = new Map();
    let left = 0, longest = 0;

    for (let right = 0; right < string.length; right ++) {
        // currentPointer is quite important
        let currentCharacter = string[right];
        console.log({"left": left, "right" : right, "currentChar": currentCharacter})
        // prevSeenchar == index (right) and is stored in object/hash map
        let prevSeenChar = seenCharacter[currentCharacter];
        
        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }
        seenCharacter[currentCharacter] = right;
        console.log({"longest": longest});
        longest = Math.max(longest, right - left + 1);

        console.log({"prevSeenChar": prevSeenChar, "right - left + 1": right - left + 1});
    }
    return longest;
}

console.log(longestUniqueStringOP(string));
