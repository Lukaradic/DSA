const PriorityQueue = require('./PriorityQueue');

describe('PriorityQueue', () => {
    let prioQueue;

    beforeEach( () => {
        prioQueue = new PriorityQueue();
    })

    it('Should enqueue a new element and place it on top of queue based on prio', () => {
        prioQueue.enqueue(10, 4);
        prioQueue.enqueue(20, 3);
        prioQueue.enqueue(30, 2);
        prioQueue.enqueue(40, 1);
        prioQueue.enqueue(50, 0);

        expect(prioQueue.values[0].val).toBe(50)
    })

    it('Should dequeue correct element based on prio', () => {
        prioQueue.enqueue(4, 4);
        prioQueue.enqueue(3, 3);
        prioQueue.enqueue(2, 2);
        prioQueue.enqueue(1, 1);
        prioQueue.enqueue(0, 0);

        expect(prioQueue.dequeue().val).toBe(0);
        expect(prioQueue.dequeue().val).toBe(1);
        expect(prioQueue.dequeue().val).toBe(2);
        expect(prioQueue.dequeue().val).toBe(3);
        expect(prioQueue.dequeue().val).toBe(4);


    })
})