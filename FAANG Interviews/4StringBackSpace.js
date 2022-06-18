S = "ab#c";
T = "ad#c";

const builtString = function(strings) {
    let returnString = [];
    for (let i = 0; i < strings.length; i++) {
        if(strings[i] !== '#') {
            returnString.push(strings[i]);
        }
        else {
            returnString.pop();
        }
    }
    return returnString; 
}

const compareStrings = function(S, T) {
    let s = builtString(S);
    let t = builtString(T);
    if (s.length !== t.length) {
        return false;
    }
    else {
        for (let i=0; i < strings.length; i++) {
            if(s[i] !== t[i]){
                return false;
            }
        }
    }
    return true;
}


console.log(compareStrings(S, T));