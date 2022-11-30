const DoubleLinkedList = require('./DoubleLinkedList');

describe('Double Linked List tests' ,() =>{
    let list;
    beforeEach(() => {
        list = new DoubleLinkedList();
    })

    it('Should push a value to the empty list', () => {
        //  when
        list.push(1);
        //  expect
        expect(list.head.val).toBe(1);
        expect(list.head.next).toBe(null);
        expect(list.head.prev).toBe(null);
        
        expect(list.tail.val).toBe(1);
        expect(list.tail.next).toBe(null);
        expect(list.tail.prev).toBe(null);
    }) ;

    it('Should push multiple values to a list', () => {
        //  when
        list.push(1);
        list.push(2);
        list.push(3);


        //  expect
        expect(list.head.val).toBe(1);
        expect(list.head.next.val).toBe(2);
        expect(list.tail.val).toBe(3);
        expect(list.tail.prev.val).toBe(2);
        expect(list.length).toBe(3);
    })

    it('Should pop a value from the end of the list', () => {
        list.push(1);
        list.push(2);
        list.push(3);
        list.pop();
        expect(list.tail.val).toBe(2);
        expect(list.tail.prev.val).toBe(1);
        expect(list.length).toBe(2);
    })

    it('Should return null if pop is called on an empty list', () => {
        expect(list.pop()).toBe(null);
    })

    it('Should shift a value to an empty list', () => {
        list.shift(1);
        expect(list.head.val).toBe(1);
        expect(list.tail.val).toBe(1);
    })

    it('Should shift a value to a list', () => {
        list.shift(1);
        list.shift(2);
        list.shift(3);
        list.shift(4);

        expect(list.head.val).toBe(4);
        expect(list.tail.val).toBe(1);
        expect(list.length).toBe(4);
        expect(list.head.next.val).toBe(3);
    })

    it('Should return null if unshift called on empty list', () => {
        expect(list.unshift()).toBe(null);
    });

    it('Should unshift a value from the list', () => {

        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        list.unshift();
        list.unshift();


        expect(list.head.val).toBe(3);
        expect(list.length).toBe(2);
    })
})