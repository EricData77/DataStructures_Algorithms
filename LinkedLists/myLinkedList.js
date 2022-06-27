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
        const leader = this.traverserToIndex(index - 1); // O(n)
        // store the current node after insert index to holdingPointer
        const holdingPointer = leader.next;
        // add newNodes to insert index
        leader.next = newNodes; 
        // point newNodes to holdingPointer to connect to the last part of the list.
        newNodes.next = holdingPointer;
        this.length++;
        return this;
    }

    remove(index) {
        const leader = this.traverserToIndex(index - 1); // O(n)
        // store the remove node to a variable, the remove node will be next node from index
        const removeNode = leader.next; // Pointer
        // remove the node by assign the leader to the next of removeNode
        leader.next = removeNode.next; // Pointer
        this.length--;
        return this.printList();
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        // Assign new tail is the existing head
        this.tail = this.head
        let second = first.next;
        while(second) {
            // [1, 2, 3, 4] - first = 1, tail = 1, second = 2, temp = 3, second.next = 1, first = 2, second = 3 
            // --> [2, 3, 1, 4] - first = 2, tail = 2, second = 3, temp = 1, second.next = 1, first = 3, second = 2 
            // --> [3, 2, 1, 4]
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
            console.log({"1st": first, "2nd": second, "temp": temp});
        }
        // The existing head will be turn to the end of list --> so its need should be null
        this.head.next = null;
        // Assign new head
        this.head = first;
        return this.printList();
    }
} 

const myLinkedList = new LinkedList(10);
myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.prepend(20);
myLinkedList.prepend(3);
console.log(myLinkedList);

// // myLinkedList.traverserToIndex(2);
// myLinkedList.insert(99, 77);
// myLinkedList.insert(3, 21);
myLinkedList.printList();
myLinkedList.reverse();