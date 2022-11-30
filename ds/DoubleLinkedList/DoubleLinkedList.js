class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if(this.head) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        if(!this.length) return null;
        this.tail = this.tail.prev;
        if(this.tail) {
            this.tail.next = null;
        }
        this.length--;
    }

    shift(val) {
        let node = new Node(val)

        if(this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
    }

    unshift() {
        if(!this.head) return null;
        this.head = this.head.next;
        if(this.head) {
            this.head.prev = null; 
        }
        this.length--;
    }

    get(index) {

    }

    set(index, val) {

    }

    insert(index, val) {

    }

    remove(index) {


    }

    reverse() {

    }
}

module.exports = DoubleLinkedList;