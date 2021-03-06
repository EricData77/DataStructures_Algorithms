class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Generate our linked list
const linkedList = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);

let curr = linkedList, cycleNode;
while(curr.next !== null) {
    if(curr.val === 3) {
        cycleNode = curr;
    }
    curr = curr.next;
}

curr.next = cycleNode;

// The solution
const findCycle = function(head) {
    const seenNodes = new Set();
    let currentNode = head;

    while(!seenNodes.has(currentNode)) {
        if(currentNode.next === null) {
            return false;
        }
    

    seenNodes.add(currentNode);

    currentNode = currentNode.next;
    }

    return currentNode;
}

console.log(findCycle(linkedList));