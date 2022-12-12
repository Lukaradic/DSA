const MaxBinaryHeap = require('./BinaryHeap');

describe('MaxBinaryHeap', () => {
    let maxBinaryHeap;
    beforeEach(() => {
        maxBinaryHeap = new MaxBinaryHeap();
    })

    it('Should insert a value to correct index', () => {
        maxBinaryHeap.insert(41);
        maxBinaryHeap.insert(39);
        maxBinaryHeap.insert(33);
        maxBinaryHeap.insert(18);
        maxBinaryHeap.insert(27);
        maxBinaryHeap.insert(12);
        maxBinaryHeap.insert(55);

        expect(maxBinaryHeap.values[0]).toBe(55);
        console.log(maxBinaryHeap.values)
    })
})