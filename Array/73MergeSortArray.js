
function mergeSortedArray(arr1, arr2){

    sortedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;


    // Check input
    if (arr1.length === 0) {
        return arr2;
    } 
    if (arr2.length === 0) {
        return arr1;
    }

    while (arr1Item || arr2Item) {
        console.log(arr1Item, arr2Item);
        if (arr2Item === undefined || arr1Item < arr2Item){
            sortedArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            sortedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return sortedArray;
}
mergeSortedArray([0,3,4], [4,6,30,31]);
console.log(sortedArray);