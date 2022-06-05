class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        console.log(this.array[this.array.length - 1])
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        console.log(this);
        return this;
    }
    pop() {
        this.array.pop();
        console.log(this);
        return this;
    }

}

const stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.push('discord');
stack.peek();
stack.pop();
stack.pop();
stack.pop();