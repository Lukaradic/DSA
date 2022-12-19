const HashMap = require('./HashMap');


describe('HashMap', () => {
    let map;
    beforeEach(() => {
        map = new HashMap();
    })
    it('Should set a key value pair', () => {
        
        map.set('luka', 24);
        map.set('marko', 23);
        map.set('nemanja', 26);
    })
    it('Should get a value based on its key', () => {

        map.set('luka', 24);
        map.set('marko', 23);
        map.set('nemanja', 26);

        expect(map.get('luka')).toBe(24);
        expect(map.get('marko')).toBe(23);
        expect(map.get('nemanja')).toBe(26);

    })

    it('Should return list of all keys', () => {
        map.set('luka', 24);
        map.set('marko', 23);
        map.set('nemanja', 26);

        expect(map.keys()).toEqual(['luka', 'marko', 'nemanja'])
    })

    it('Should return list of all values', () => {
        map.set('luka', 24);
        map.set('marko', 23);
        map.set('nemanja', 26);

        expect(map.values()).toEqual([24, 23, 26])
    })
})