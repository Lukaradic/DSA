const BST = require('./BinarySearchTree');

describe('BST', () => {
    let tree;
    beforeEach(() => {
        tree = new BST();
    })
    it('Should insert new node', () => {
        tree.insert(10);
        tree.insert(12);
        tree.insert(4);

        expect(tree.root.val).toBe(10);
        expect(tree.root.left.val).toBe(4);
        expect(tree.root.right.val).toBe(12);
    } );
    it('Should find an node', () => {
        tree.insert(10);
        tree.insert(12);
        tree.insert(4);
        tree.insert(5);
        tree.insert(17);
        tree.insert(145);
        tree.insert(135);
        tree.insert(235);


        expect(tree.find(4)).toBe(true);
        expect(tree.find(17)).toBe(true);
        expect(tree.find(20)).toBe(false);
        expect(tree.find(135)).toBe(true);
        expect(tree.find(145)).toBe(true);
        expect(tree.find(200)).toBe(false);



    });
})