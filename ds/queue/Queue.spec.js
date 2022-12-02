const Queue = require('./Queue');

describe('Queue', () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

    })
    it('Should add a value to the end', () => {

        expect(queue.size).toBe(3);
        expect(queue.first.val).toBe(1);
        expect(queue.last.val).toBe(3);

    });

    it('Should remove a value from start', () => {
        queue.dequeue();

        expect(queue.size).toBe(2);
        expect(queue.first.val).toBe(2);

    });

    it('Should return correct size', () => {

        expect(queue.size).toBe(3);
    });
})