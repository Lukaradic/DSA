const MaxBinaryHeap = require('./BinaryHeap');

describe('MaxBinaryHeap', () => {
    let maxBinaryHeap;
    beforeEach(() => {
        maxBinaryHeap = new MaxBinaryHeap();
    })

    it('Should insert a value to correct index', () => {
        maxBinaryHeap.insert(39);
        maxBinaryHeap.insert(41);
        maxBinaryHeap.insert(33);
        maxBinaryHeap.insert(18);
        maxBinaryHeap.insert(27);
        maxBinaryHeap.insert(12);
        maxBinaryHeap.insert(55);

        let root = maxBinaryHeap.values[0];

        expect(maxBinaryHeap.values[0]).toBe(55);
        expect(maxBinaryHeap.values.every(el => el <= root)).toBe(true);
    })

    it('Should remove the root and correctly place other elements', () => {
        maxBinaryHeap.insert(1);
        maxBinaryHeap.insert(2);
        maxBinaryHeap.insert(3);
        maxBinaryHeap.insert(4);
        maxBinaryHeap.insert(5);
        maxBinaryHeap.insert(6);

        maxBinaryHeap.extractMax();
        maxBinaryHeap.extractMax();
        maxBinaryHeap.extractMax();

        expect(maxBinaryHeap.values).toEqual([3,1,2])


        // expect(maxBinaryHeap.values[0]).toBe(41);
        // expect(maxBinaryHeap.values.every(el => el <= root)).toBe(true);
    })
})