class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = null;
    }

    peek() {
        console.log(this.top.value);
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingValue = this.top;
            this.top = newNode;
            this.top.next = holdingValue;
        }
        this.length++;
        console.log(this);
        return this;
    }
    pop() {
        if (!this.top){
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const holdingValue = this.top;
        this.top = this.top.next;
        this.length --;
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