// Factorial with loop
function factorialLoop (number) {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    console.log(answer);
    return answer;
}

// Factorial with recursion 

function factorialRecursion(number) {
    if (number === 2) {
        return 2;
    }
    return number * factorialRecursion(number - 1);
}

factorialRecursion(2);
factorialLoop(5);