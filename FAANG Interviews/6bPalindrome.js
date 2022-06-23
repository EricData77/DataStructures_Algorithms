var validPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    while(left < right) {
        if(s[left] !== s[right]) {
            // It is quite similar with recurssion, we call similar function for small set of objects
            return validSubPalindrome(s, left + 1, right) || validSubPalindrome(s, left, right - 1);
        }
        left ++;
        right --;
    }
    return true;
}

var validSubPalindrome = function(s, start, end) {
    while(start < end) {
        if(s[start] !== s[end]) {
            return false;
        }    
    start++;
    end--;
    }
    
    return true;
}

const s = "abccdba";
console.log(validPalindrome(s));