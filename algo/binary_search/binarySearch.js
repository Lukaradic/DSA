function binarySearch(val, arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end ) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === val) return mid;
        if(arr[mid] > val) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

module.exports =  binarySearch;