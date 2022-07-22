const string1 = "(ab(cd)";

const minRemoveToMakeValid = function(str) {
    const res = str.split('');
    const stack = [];

    for(let i = 0; i < str.length; i++) {
        if(res[i] === "(" ) {
            stack.push(i);
        } else if(res[i] === ")" && stack.length) {
            stack.pop();
        } else if(res[i] === ")") {
            res[i] = '';
        }
    }
    while(stack.length) {
        const remainIndexInStack = stack.pop();
        res[remainIndexInStack] = '';
    }

    return res.join('');
}

console.log(minRemoveToMakeValid(string1));