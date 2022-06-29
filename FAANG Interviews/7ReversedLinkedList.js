// ---- Create LinkNode class ----
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// ---- Generate our linked list from an array----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// const linkedList = [5, 4, 3, 2, 1];
// linkedList.forEach(element => {
//     new ListNode(linkedList[element], linkedList[element + 1]);
// });

// ---- Print our linked list ----
const printList = (head) => {
    if (!head) {
        return;
    }

    console.log(head.val);
    printList(head.next);
}

// ---- Main function ----

const reversedLinkedList = function(head) {
    let prev = null; // sub linked-list to store reversed part of the linked list
    let current = head; // current shift until the end of linked list to find tail
    while(current) {
        let next = current.next; // store current next Node in next variable 
        current.next = prev; // reverse the current next Node with prev linked list created
        prev = current; // Update prev linked list by adding current next Node value
        current = next; // Shift current value to check while loop condition
    }
    return prev;
}

printList(linkedList);
console.log('after reverse');
printList(reversedLinkedList(linkedList));