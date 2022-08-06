const array = [5,3,1,6,4,2];
const kToFind = 4;

const swap = function (array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

const getPartition = function(sub_array, left, right) {
    const pivotElement = sub_array[right];
    let partitionIndex = left;

    for (let j = left; j < right; j++) {
        if (sub_array[j] <= pivotElement) {
            swap(sub_array, partitionIndex, j);
            partitionIndex ++;
        }
    }
    swap(sub_array, partitionIndex, right)
    return partitionIndex;
};

const quickSort = function (nums, left, right) {
    if (left < right) {
        const partitionIdx = getPartition(nums, left, right);

        quickSort(nums, left, partitionIdx - 1);
        quickSort(nums, partitionIdx + 1, right);
    }
};

var findKthLargest = function(nums, k) {
    const indexToFind = nums.length - k;
    quickSort(nums, 0, nums.length - 1);
    return nums[indexToFind]
};

console.log(findKthLargest(array, kToFind));