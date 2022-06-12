const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i ++) {
        if (arr[i] < arr[0]) {
            // move the number to the first position
            // splice method return 1 element child array from i 
            // unshift method add element in the top of an array
            arr.unshift(arr.splice(i,1)[0]);
        }
        else {
            /* Only sort number smaller than number on the left of it. 
            This is the part of insertion sort that makes it fast if the array is almost sorted. */
            if (arr[i] < arr[i-1]) {
                // find where the number should go
                for (var j = 1; j < 1; j++) {
                    if(arr[i] >= arr[j-1] && arr[i] < arr[j] ){
                        // move number to the right spot
                        arr.splice(j,0,arr.splice(i,0)[0]);
                    }
                }
            }
        }


    }
}

insertionSort(numbers);
console.log(numbers);

/*
if1
i = 1 (44 < 99) --> 44, 99
i = 2 (6 < 44) --> 6, 44, 99
i = 3 (2 < 6) --> 2, 6, 44, 99
i = 4 (1 < 2) --> 1, 2, 6, 44, 99
if2
i = 5 (5 < 99) 
--> j = 1 | arr[5] > arr[0] (5 > 1) && arr[5] < arr[1] (5 < 2) --> False
--> j = 2 | (5 > 2) && (5 < 6) --> True --> insert 5 to arr[2] --> 1,2,5,6,44,99
i = 6 (63 < 99)
--> j = 1 | (63 > 1) && (63 < 2) --> F
--> j = 2 | (63 > 2) && (63 < 5) --> F
...
--> j = 5 | (63 > 44 ) && (63 < 99) --> T --> Add 63 to arr[5] --> 1,2,5,6,44,63,99
*/ 

/* 
If < 1st element --> turn to the first element
If > 1st element --> Find the position to insert (find a pair to insert on)
--> The best for nearly SORTED
*/
