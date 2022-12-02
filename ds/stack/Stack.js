class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    push(val) {
        let node = new Node(val);

        if(this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }
        this.size++;
        return node;
    }

    pop() {
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

module.exports = Stack;