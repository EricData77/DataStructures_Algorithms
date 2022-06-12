const arr = [10, 3, 4, 2, 12, 24, 56, 7, 8, 100];

function selectionSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i ++) {
        let min = i;
        let temp = arr[i];
        for (let j = i+1; j < length; j++) {
            if(arr[j] < arr[min]) {
                // Finding for the min position in the array
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = temp;
    }
}

selectionSort(arr);
console.log(arr);