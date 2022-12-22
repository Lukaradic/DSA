const BST = require('./BinarySearchTree');

describe('BST', () => {

    let tree;
    beforeEach(() => {
        tree = new BST();
    })

    it('inserts a value into the tree', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(3);
        tree.insert(7);
        tree.insert(13);
        tree.insert(17);

        expect(tree.root.value).toBe(10);
        expect(tree.root.left.value).toBe(5);
        expect(tree.root.right.value).toBe(15);
        expect(tree.root.left.left.value).toBe(3);
        expect(tree.root.left.right.value).toBe(7);
        expect(tree.root.right.left.value).toBe(13);
        expect(tree.root.right.right.value).toBe(17);
    });
    it('Should find an node', () => {

        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(3);
        tree.insert(7);
        tree.insert(13);
        tree.insert(17);

        expect(tree.find(5)).toEqual({ value: 5, left: {value: 3, left: null, right: null}, right: { value: 7, left: null, right: null}});
        expect(tree.find(10)).toEqual({ value: 10, left: { value: 5, left: { value: 3, left: null, right: null }, right: { value: 7, left: null, right: null } }, right: { value: 15, left: { value: 13, left: null, right: null }, right: { value: 17, left: null, right: null } } });
        expect(tree.find(17)).toEqual({ value: 17, left: null, right: null });

    });
    it('returns null if value is not found in the tree', () => {

        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(3);
        tree.insert(7);
        tree.insert(13);
        tree.insert(17);

        expect(tree.find(2)).toBe(null);
        expect(tree.find(20)).toBe(null);
    });
    
    it('traverses the tree in breadth-first order', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(3);
        tree.insert(7);
        tree.insert(13);
        tree.insert(17);

        expect(tree.bfs().map(el => el.value)).toEqual([10, 5, 15, 3, 7, 13, 17]);
      });
})