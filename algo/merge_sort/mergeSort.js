function mergeTwoArrays(arrOne, arrTwo) {
    let merged = [];
    let i = 0;
    let j = 0;
    while(i < arrOne.length && j < arrTwo.length) {
        if(arrOne[i] < arrTwo[j]) {
            merged.push(arrOne[i]);
            i++;
        } else {
            merged.push(arrTwo[j]);
            j++;
        }
    }
    while(i < arrOne.length ) {
        merged.push(arrOne[i]);
        i++;
    }

    while(j < arrTwo.length ) {
        merged.push(arrTwo[j]);
        j++;
    }
    return merged;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeTwoArrays(left, right);
}

exports.mergeTwoArrays = mergeTwoArrays;
exports.mergeSort = mergeSort;
