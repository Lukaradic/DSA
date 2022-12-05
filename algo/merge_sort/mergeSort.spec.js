const { mergeTwoArrays, mergeSort } = require('./mergeSort.js');

describe('MergeSort', () => {
    it('Test merge two arrays', () => {
        let arrOne = [1, 3, 5];
        let arrTwo = [2, 4, 6];
        const merged = mergeTwoArrays(arrOne, arrTwo);
        expect(merged[0]).toBe(1);
        expect(merged[5]).toBe(6);
    })
    it('Should correctly sort an array', () => {
        let arr = [10, 20, 30, 4, 1, 76, 14];
        const merged = mergeSort(arr);
        
        expect(merged[0]).toBe(1);
        expect(merged.at(-1)).toBe(76);
    });
})