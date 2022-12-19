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

    //  removes the root
    //  swaps the root for the last element added
    //  then it compares the root to its chilrend and if root is bigger than children end the method
    //  if not swap the root to the higher value child
    //  repeat

    getLeftChildIndex(index) {
        return Math.floor(2 * index + 1 );
    } 

    getRightChildIndex(index) {
        return Math.floor(2 * index + 2 );
    } 

    extractMax() {
        let returnValue = this.values[0];
        let end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return returnValue;
    }

    sinkDown() {
        let index = 0;
        let element = this.values[0];
        this.values[0] = element;
        let toLoop = true;

        while(toLoop) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let left = this.values[leftIndex];
            let right = this.values[rightIndex];

            if(left && left > element) {
                if(right && right > element && right > left) {
                    [this.values[index], this.values[rightIndex]] = [this.values[rightIndex], this.values[index]];
                    index = rightIndex;
                } else {
                    [this.values[index], this.values[leftIndex]] = [this.values[leftIndex], this.values[index]];
                    index = leftIndex;
                }
            } else if(right && right > element) {
                [this.values[index], this.values[rightIndex]] = [this.values[rightIndex], this.values[index]];
                index = rightIndex;
            } else {
                toLoop = false;
            }
        }
    }
}

    //  priority queue
    //  ds where each el has a priorty value, and el with higher priority value come first
    //  BigO (log n) insert/delete
    //  

module.exports  = MaxBinaryHeap;