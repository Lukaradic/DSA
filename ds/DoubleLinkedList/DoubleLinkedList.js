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

    isIndexValid(index) {
        return typeof index === 'number' && index <= this.length && index >= 0
    }

    push(val) {
        let node = new Node(val);
        if (this.head) {
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
        if (!this.length) return null;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        }
        this.length--;
    }

    unshift(val) {
        let node = new Node(val)

        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
    }

    shift() {
        if (!this.head) return null;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
        this.length--;
    }

    get(index) {
        if (!this.isIndexValid(index)) return null;
        let count = 0;
        let curr = this.head;
        while (count < index) {
            curr = curr.next;
            count++;
        }
        return curr;
    }

    set(index, val) {
        let node = this.get(index);
        if (!node) return null;
        node.val = val;
        return node;
    }

    insert(index, val) {
        if(index > this.length || index < 0 || typeof index !== 'number') return null;
        if(val === undefined || val === null) return null;
        if(index === this.length) return this.push(val);
        let newNode = new Node(val);
        let current = this.get(index);
        let prev = current.prev;

        newNode.prev = prev;
        newNode.next = current;
        prev.next = newNode;
        this.length++;
        return newNode;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    remove(index) {
        if(!this.isIndexValid(index)) return null;
        if(index === 0 ) return this.shift();
        if(index === this.length - 1) return this.pop();
        let curr = this.get(index);
        let prev = curr.prev;
        let next = curr.next;

        prev.next = next;
        next.prev = prev;
        this.length--;
        return curr;
    }

    reverse() {

        let count = 0;
        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;
        while(count < this.length) {
            let next = curr.next;
            [curr.next, curr.prev] = [curr.prev, curr.next];
            curr = next;
            count++;
        }
        return this;
    }
    print() {
        let count = 0;
        let curr = this.head;
        while(count < this.length) {
            curr = curr.next;
            count++;
        }
    }
}

module.exports = DoubleLinkedList;