function tailFactorial(x, totalSoFar = 1) {
    if (x === 0) {
        return totalSoFar;
    } else {
        return tailFactorial(x - 1, totalSoFar * x);
    }
}

console.log(tailFactorial(5))