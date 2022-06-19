const S = "abc#d";
const T = "abzz##d";

// SOLUTION 1

function builtString(strings) {
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
    let finalS = builtString(S);
    let finalT = builtString(T);
    if (finalS.length !== finalT.length) {
        return false;
    }
    else {
        for (let i=0; i < finalS.length; i++) {
            if(finalS[i] !== finalT[i]){
                return false;
            }
        }
    }
    return true;
}

// SOLUTION 2
function backSpaceCompare(S, T){
    let p1 = S.length - 1, p2 = T.length - 1;
    while(p1 >= 0 || p2 >= 0) {
        console.log({"p1":p1, "p2": p2});
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;
                while (backCount > 0) {
                    p1 --;
                    backCount --;
                    console.log({"BackCount 1": backCount});
                    console.log({"P1 bc": p1});
                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }
            if(T[p2] === "#") {
                let backCount = 2;
                while (backCount > 0) {
                    p2 --;
                    backCount --;
                    console.log({"BackCount 2": backCount});
                    console.log({"P2 bc": p2});
                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }

        } else {
            if (S[p1] !== T[p2]) {
                return false;
            } else {
                p1 --;
                p2 --;
            }
        }
    }
    return true;
}


console.log(backSpaceCompare(S, T));