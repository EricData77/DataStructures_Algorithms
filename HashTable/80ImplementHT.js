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
        this.data[address].push(key,value);
        return this.data;
        console.log(this.data);
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket.length){
            for (let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    
}

const myHashTable = new HashTable(2); // Number here is the space for address of HashTable --> Hash Corrision

// console.log(myHashTable._hash('the xuan tran'));

myHashTable.set('grapes', 10000);
myHashTable.set('apple', 23);
myHashTable.set('banana', 23);
console.log(myHashTable.get('apple'));