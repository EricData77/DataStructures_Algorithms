const array = [0,1,0,2,1,0,1,3,2,1,2,1];

const trappingRainWater = function(array) {
    let totalWater = 0;

    for (let i = 0; i < array.length; i ++) {
        let leftpointer = i, rightpointer = i, maxleft = 0, maxright = 0;
        /*CONDITION to move the pointer here is using max value 
        by making a comparision. */
        while (leftpointer >= 0) {
            maxleft = Math.max(maxleft, array[leftpointer]);
            leftpointer --;
        }
        while (rightpointer < array.length) {
            maxright = Math.max(maxright, array[rightpointer]);
            rightpointer ++;
        }
        // currentWater of the i element
        const currentWater = Math.min(maxleft, maxright) - array[i];

        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }
    // Return totalWater after finishing the while loop
    return totalWater;
}

function trappingRainWaterOptimized(array) {
    let leftPointer = 0, rightPointer = array.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;

    while (leftPointer < rightPointer) {
        // if left value < right value --> Move left pointer
        if (array[leftPointer] < array[rightPointer]) {
            console.log({"LeftPointerValue:" : leftPointer, "RightPointerValue:" : rightPointer, "TrappingRain" : totalWater})
            if(array[leftPointer] >= maxLeft) {
                console.log(maxLeft);
                maxLeft = array[leftPointer];
            } 
            else {
                totalWater += maxLeft - array[leftPointer];
            }
            leftPointer ++;
        }
        // If right value < left value --> Move right pointer
        else {
            if (array[rightPointer] >= maxRight ) {
                console.log(maxRight);
                maxRight = array[rightPointer];
            }
            else {
                totalWater += maxRight - array[rightPointer];
            }
            rightPointer --;
        }
        }
    return totalWater;
    }


console.log(trappingRainWaterOptimized(array));