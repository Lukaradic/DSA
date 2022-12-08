class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
        } else {
            let curr = this.root;
            while (curr) {
                if (node.val > curr.val) {
                    if (curr.right) {
                        curr = curr.right;
                    } else {
                        curr.right = node;
                        break;
                    }
                } else {
                    if (curr.left) {
                        curr = curr.left;
                    } else {
                        curr.left = node;
                        break;
                    }
                }
            }
        }
        return this;
    }

    find(val) {
        let curr = this.root;
        while(curr) {
            if(curr.val === val) return true;
            if(val > curr.val ) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        return false;
    }
}

//  root = top node
//  child = a node connected to another node, moving away from the root
//  parent = opposite of a child
//  siblings = group of nodes that share the same parent
//  leaf = node that has no children
//  egde = connection between two nodes

//  usage: to store sorted data so that data can be searched/ inserted very quickly

//  BIG 0 
//  insert = Big0(log n) // worst = Big0(n) => if the tree is only one sided (adding only larger/smaller nodes);
//  find = Big0(log n) // worst = Big0n(n) => if the tree is only one sided and we are looking for the last node

module.exports = BinarySearchTree;

