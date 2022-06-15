const array = [1, 3, 5, 6, 7];
const target = 10;

function findTwoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        const numberTofind = target - array[i];
        for (let j = i + 1; j < array.length; j ++) {
            if (numberTofind === array[j]) {
                // console.log(i, j);
                return [i, j];
            }
        }
    }
    return null;
} 

function findTwoSumHashMap(array, target) {
    const map = {};
    for (let i = 0; i < array.length; i ++) {
        const currentMapValue = map[array[i]];
        if (currentMapValue) {
            return [currentMapValue, i];
        }
        else {
            const numberTofind = target - array[i];
            map[numberTofind] = i;
        }
    }
    return null;
}


console.log(findTwoSumHashMap(array, target));