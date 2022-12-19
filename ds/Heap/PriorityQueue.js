class Node {
    constructor(val, prio) {
        this.val = val;
        this.prio = prio;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    enqueue(val, prio) {
        let node = new Node(val, prio);
        this.values.push(node);
        let index = this.values.length - 1;
        let parentIndex = this.getParentIndex(index);
        while (node.prio < this.values[parentIndex]?.prio) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
        return this.values;
    }

    getLeftChildIndex(index) {
        return Math.floor(2 * index + 1);
    }

    getRightChildIndex(index) {
        return Math.floor(2 * index + 2);
    }

    dequeue() {
        let returnValue = this.values[0];
        let current = this.values.pop();
        this.values[0] = current;
        this.bubbleUp();
        return returnValue;
    }

    bubbleUp() {
        let index = 0;
        let toLoop = true;
        let node = this.values[index];
        while (toLoop) {
            let leftIndex = this.getLeftChildIndex(index);
            let rightIndex = this.getRightChildIndex(index);
            let left = this.values[leftIndex];
            let right = this.values[rightIndex];
            if (left && left.prio < node.prio) {
                if (right && right.prio < left.prio) {
                    [this.values[index], this.values[rightIndex]] = [this.values[rightIndex], this.values[index]];
                    index = rightIndex;
                } else {
                    [this.values[index], this.values[leftIndex]] = [this.values[leftIndex], this.values[index]];
                    index = leftIndex;

                }
            } else if (right && right.prio < node.prio) {
                [this.values[index], this.values[rightIndex]] = [this.values[rightIndex], this.values[index]];
                index = rightIndex;


            } else {
                toLoop = false;

            }
        }

    }

}

module.exports = PriorityQueue;