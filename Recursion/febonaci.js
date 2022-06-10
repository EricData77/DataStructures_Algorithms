// 0 1 1 2 3 5 8 ...
// Fibonacy with loop

function fibonaciLoop (n) {
    let array = [0, 1];
        for (let i = 2; i <= n; i ++) {
            array.push(array[i-2] + array[i-1]); 
            console.log(array);
        }
    console.log(array[n]);
    return array[n];
}

// Fibonacy with recursion

function fibonaciRecursion (n) {
    if (n < 2) {
        return n;
    }
    return fibonaciRecursion(n-2) + fibonaciRecursion(n-1);
}

// fibonaciLoop(1);
// fibonaciLoop(4);

fibonaciRecursion(1);
fibonaciRecursion(4);