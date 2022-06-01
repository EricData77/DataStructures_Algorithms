/* 
Create custome array and its methods.
Array is one type of Objects and can be created by Class()
*/

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    // Create get method for the array
    get(index) {
        return this.data[index];
    }

    // Create push method to add item
    push(item){
        this.data[this.length] = item;
        this.length ++;
        return this.length;
    }

    // Create pop method to delete the last item of the array
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length --;
        return lastItem;
    }

    // Create delete method: delete the item with input idex --> then shift the remaining index to the left.
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i ++) {
            this.data[i] = this.data[i+1];
        }
        // Delete the last item because we use this.data[i+1]
        delete this.data[this.length - 1];
        // Decrease the length - 1 because the item is deleted
        this.length --;
    }
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();
// newArray.pop();
newArray.delete(1);
console.log(newArray);
