class Node {

}

class HashMap {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }


    _hash(key) {
        let total = 0;
        let prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            total += ((key.charCodeAt(i) - 96) * prime);
        }
        return total % this.keyMap.length;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        let count = 0;
        while (count < this.keyMap[index].length) {
            let hashed = this.keyMap[index][count];
            if (hashed[0] === key) return hashed[1];
            count++;
        }
        return null;
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0]);
                }
            }

        }

        return keys;
    }

    values() {
        let values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1]);
                }
            }

        }

        return [... new Set(values)]
    }

    //  separate chaning
    //  linear probing
}



//  everylanguage has its own implementation of hash maps (Objects in JS)
//  used to pair key-value pairs


//  insert = Big0(1);
//  deletion = Big0(1);
//  access = Big0(1);


module.exports = HashMap;