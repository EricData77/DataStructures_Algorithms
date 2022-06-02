class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // Create the set function
    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
            // this.data[address].push(key,value);
            // console.log(this.data);
        }
        this.data[address].push([key,value]); // push an array to data array
        console.log(this.data);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        // console.log(currentBucket[1]);
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key) {
                    console.log(currentBucket[i][1]);
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]){
                keysArr.push(this.data[i][0][0]);
            }
        }
        console.log(keysArr);
        return keysArr;
    }

    keys2() {
        if (!this.data.length) {
            return undefined
            }
            let result = []
            // loop through all the elements
            for (let i = 0; i < this.data.length; i++) {
                // if it's not an empty memory cell
                if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                    result.push(this.data[i][j][0])
                    }
                } else {
                    result.push(this.data[i][0])
                } 
                }
            }
            return result; 
    }
    
}

const myHashTable = new HashTable(50); // Number here is the space for address of HashTable --> Hash Corrision

// console.log(myHashTable._hash('the xuan tran'));

myHashTable.set('grapes', 10000);
myHashTable.set('apple', 23);
myHashTable.set('banana', 23);
myHashTable.get('apple');
myHashTable.get('banana');
myHashTable.keys();