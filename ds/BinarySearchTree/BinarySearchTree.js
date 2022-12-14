class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        // If the tree is empty, create a new node and return it.
        if (!this.root) {
            this.root = new Node(value);
            return this;
        }

        // Find the correct position to insert the new node.
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = new Node(value);
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = new Node(value);
                    break;
                }
                current = current.right;
            }
        }
        return this;
    }

    find(value) {
        let curr = this.root;
        while (curr) {
            if (curr.value === value) return curr;
            if (value > curr.value) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        return null;
    }

    bfs() {
        //  if it was a regular tree, we would just loop through the node to see all the children instead of hardcoding .left .right
        let queue = [];
        let data = [];

        queue.push(this.root);
        while (queue.length) {
            let node = queue[0];
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            queue.shift();
        }
        return data;
    }

    //  3 types
    //  preOrder
    //  postOrder
    //  inOrder

    //  visit node first, then go to its left/right
    dfsPreOrder() {

        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    //  go to most left, then visit the node
    dfsPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node);
        }
        traverse(current);
        return data;
    }

    //  visit left side first, then right side
    dfsInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
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

//  bfs = visiting each sibling before going to the child (horizontal view);
//  dfs = vertical search
//  time complexity is the same for BFS & DFS space complexity depends on the type of the tree;
//  use bfs when tree is narrow and has a lot of depth
//  use dfs when tree is wide and has les depth

module.exports = BinarySearchTree;

