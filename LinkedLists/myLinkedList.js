class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        } 
        this.tail = this.head; // pointer to this.head address.
        this.length = 1;
    }

    append(value) {
        const newNodes = {
            value:value,
            next: null
        }
        // OR const newNodes = new Node(value);
        // Appends newNodes into the existing tail - also mean this.head address
        this.tail.next = newNodes;
        // the new tail is the newNodes that have added - the tail.next now is null
        this.tail = newNodes;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNodes = {
            value: value,
            // next pointer to the existing head
            // next: this.head -- OR
            next: null // more easy to form newNodes to class.
        }
        // next pointer to the existing head
        newNodes.next = this.head;
        // set new head for newNodes that prepended.
        this.head = newNodes;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }

    traverserToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        console.log(currentNode);
        return currentNode;
    }

    insert(index, value) {
        //check params
        if (index > this.length) {
           return this.append(value);
        }
        const newNodes = new Node(value);
        const leader = this.traverserToIndex(index - 1);
        // store the current node after insert index to holdingPointer
        const holdingPointer = leader.next;
        // add newNodes to insert index
        leader.next = newNodes; 
        // point newNodes to holdingPointer to connect to the last part of the list.
        newNodes.next = holdingPointer;
        this.length++;
        return this;
    }
} 

const myLinkedList = new LinkedList(10);
myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.prepend(20);
myLinkedList.prepend(3);
console.log(myLinkedList);

// myLinkedList.traverserToIndex(2);
myLinkedList.insert(99, 77);
myLinkedList.insert(3, 21);
myLinkedList.printList();