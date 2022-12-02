class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    enqueue(val) {
        let node = new Node(val);
        if(this.first) {
            this.last.next = node;
            this.last = node;
        } else {
            this.first = node;
            this.last = node;
        }
        this.size++;
        return node;
    }

    dequeue() {
        if(this.size === 0) return null;
        let node = this.first;
        this.first = this.first.next;
        this.size--;
        if(this.size === 0) {
            this.first = null;
            this.last = null;
        }
        return node;
    }

    clear() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
}

module.exports = Queue;