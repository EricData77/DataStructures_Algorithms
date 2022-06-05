class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = null;
    }

    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length ++ ;
        console.log(this);
        return this;


    }
    dequeue() {

    }

}

const queue = new Queue();
queue.enqueue('google');
// queue.enqueue('udemy');
// queue.enqueue('discord');
// queue.peek();
// queue.pop();
// queue.pop();
// queue.pop();