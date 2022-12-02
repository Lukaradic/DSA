const Stack = require('./Stack');

describe('Stack', () => {
    let stack;
    beforeEach(() =>{
        stack = new Stack();
    })
    it('Can push an element to the front ', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.first.val).toBe(3);
        expect(stack.last.val).toBe(1);
        expect(stack.size).toBe(3);
    })

    it('Can pop the first element from the end', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        stack.pop();
        expect(stack.size).toBe(2);
        expect(stack.first.val).toBe(2);
    })

    it('Will return the correct size', () => {

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        expect(stack.size).toBe(4);
    })
    it('Should clear all values', () => {
        stack.push(4);
        stack.push(4);

        stack.clear();
        expect(stack.first).toBe(null);
        expect(stack.last).toBe(null);
        expect(stack.size).toBe(0);

    })
})