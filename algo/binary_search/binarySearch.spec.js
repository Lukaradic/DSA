const binarySearch = require('./binarySearch');

describe('binary search', () => {
    let arr;
    beforeEach(() => {
        arr = [1, 2, 3, 4, 5, 6, 7, 8];
    }) 
    it('Should return -1 if value is not in the array', () => {

        expect(binarySearch(10, arr)).toBe(-1);
        expect(binarySearch(21, arr)).toBe(-1);

    });
    it('Should return correct index if the value is in the array', () => {

        expect(binarySearch(2, arr)).toBe(1);
        expect(binarySearch(1, arr)).toBe(0);
        expect(binarySearch(7, arr)).toBe(6);
    });
})