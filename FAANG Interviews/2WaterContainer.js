/*
https://leetcode.com/problems/container-with-most-water/
*/

function getMaxWaterContainer(array){
    let maxArea = 0;
    // console.log(maxArea);
    for(let i = 0; i < array.length; i ++) {
        // console.log({i, value: array[i]});
        for(let j = i + 1; j < array.length; j ++){
            // console.log({j, value: array[j]});
            const height = Math.min(array[i], array[j]);
            const width = j - i;
            const area = height * width;
            maxArea = Math.max(maxArea, area);

            // if (array[i] * array[j] > maxArea) {
            //     if (array[i] < array[j]){
            //         maxArea = array[i] * (j - i);
            //     }
            //     maxArea = array[j] * (j - i);
            // }
        }
    }
    return maxArea;
}

function getMaxWaterContainer2(array) {
    // Two pointers method
    let maxArea = 0, p1 = 0, p2 = array.length - 1;
    while( p1 < p2) {
        console.log({p1, value: array[p1]});
        console.log({p2, value: array[p2]});
        const height = Math.min(array[p1], array[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
        console.log(maxArea);
        if(array[p1] <= array[p2]) {
            p1 ++;
        }
        else {
            p2 --;
        }
    }
    // console.log(maxArea);
    return maxArea;
}
const height = [1,8,6,2,5,4,8,3,7];
console.log(getMaxWaterContainer2(height));

