const DoubleLinkedList = require('./DoubleLinkedList');

describe('Double Linked List tests' ,() =>{
    let list;

    beforeEach(() => {
        list = new DoubleLinkedList();
    })

    it('Is index valid should return true if valid, false if not', () => {
        expect(list.isIndexValid(20)).toBe(false);
        expect(list.isIndexValid('asdf')).toBe(false);
        expect(list.isIndexValid(-12)).toBe(false);

        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.isIndexValid(0)).toBe(true);
        expect(list.isIndexValid(1)).toBe(true);

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

    it('Should unshift a value to an empty list', () => {
        list.unshift(1);
        expect(list.head.val).toBe(1);
        expect(list.tail.val).toBe(1);
    })

    it('Should unshift a value to a list', () => {
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        list.unshift(4);

        expect(list.head.val).toBe(4);
        expect(list.tail.val).toBe(1);
        expect(list.length).toBe(4);
        expect(list.head.next.val).toBe(3);
    })

    it('Should return null if shift called on empty list', () => {
        expect(list.shift()).toBe(null);
    });

    it('Should shift a value from the list', () => {

        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        list.shift();
        list.shift();


        expect(list.head.val).toBe(3);
        expect(list.length).toBe(2);
    })
    it('Should return null if get is called with invalid index', () => {
        expect(list.get(21)).toBe(null);
        expect(list.get('asdf')).toBe(null);
        expect(list.get(-1)).toBe(null);
    })
    it('Should return node when get is called with valid index', () => {
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        expect(list.get(1).val).toBe(2);
        expect(list.get(3).val).toBe(4);
    })
    it('Should return null if set is called with invalid inde', () => {
        expect(list.set(2)).toBe(null);
    })

    it('Should change the value of node when set is called with valid index', () => {
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        list.set(1, 20);
        list.set(0, 10);

        expect(list.head.val).toBe(10);
        expect(list.get(1).val).toBe(20);
    })

    it('Should insert a new node into selected index', () => {
        expect(list.insert(21)).toBe(null);
        expect(list.insert('asdf')).toBe(null);
        expect(list.insert(-2)).toBe(null);
        
        
        list.insert(0, 1);
        list.insert(1, 2);
        expect(list.head.val).toBe(1);
        expect(list.tail.val).toBe(2);
        expect(list.length).toBe(2);
    })

    it('Should remove node at passed index', () => {
        list.push(1);
        list.push(2);
        list.push(3);

        list.remove(0);
        list.remove(0);
        list.remove(0);

        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
    })
    it('Should reverse the list', () => {
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);


        list.reverse();
        expect(list.head.val).toBe(5);
        expect(list.tail.val).toBe(1);
        expect(list.head.next.val).toBe(4);
        list.print();
    })
})