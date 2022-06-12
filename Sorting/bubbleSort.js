const arr = [1, 3, 4, 2, 12, 24, 56, 7, 8, 100];

function bubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i ++) {
        for (let j = 0; j < length; j ++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(arr);
console.log(arr);