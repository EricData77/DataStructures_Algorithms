// [1 2 3 4 1 2 3 5 6]

function solution1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[j] === arr[i]) {
                console.log(arr[j]);
                return arr[j];
            }
        }
    }
    return undefined;
}
solution1([2, 5, 5, 2, 7, 2, 3, 5, 6])

function solution2(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i ++){
        if (map[arr[i]] != undefined) {
            console.log(arr[i]);
            return arr[i];
        } 
        map[arr[i]] = i;
        // console.log(map);
    }
    return undefined;
}
// solution2([1, 2, 3, 4, 7, 2, 3, 5, 6])