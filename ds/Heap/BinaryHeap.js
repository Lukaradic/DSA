//  heap is a type of tree with some certain rules
//  max heap is a tree where the parent node is always bigger than the child node
//  min heap is the opposite
//  there is no order in heap (left/right)

//  max binary heap rules: 
//  each parent has at most 2 children
//  the value of each parent node is higher than the child nodes
//  sibling nodes have no rules in value
//  heap is always compact as much as possible, and the left side is always filled first


//  heap is used for priority queue
//  used also for traversing graphs

//  to find a child
//  n = index in array
//  2n + 1 left child
//  2n + 2 right child

//  to find a parent
//  Math.floor((n - 1) / 2)

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    insert(val) {
        this.values.push(val);
        let index = this.values.length - 1;
        let parentIndex = this.getParentIndex(index);
        while(this.values[index] > this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
        return this.values;
    }
}

module.exports  = MaxBinaryHeap;