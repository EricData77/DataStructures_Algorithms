class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // ---- Generate our linked list ----
  const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
  
  // ---- Generate our linked list ----
  
  const printList = (head) => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    printList(head.next);
  }

  
const reverseBetween = function(head, m, n) {
    let currentPos = 1, currentNode = head, start = head
    // Process when control run before m position
    while (currentPos < m) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos ++;
    }
    // Process when control is at m position, 
    // newList is a new Node created to shuflle the position by newList pointer
    let newList = null, tail = currentNode;
    // Process inside reversed zone
    while (currentPos >=m && currentPos <=n) {
        const next = currentNode.next; // use next as middleman to store the next node
        currentNode.next = newList; // assign pointer of currentNode.next to newList Node
        newList = currentNode; // Replace currentNode by newList node --> swap currentNode --> nextNode
        currentNode = next; // Together with above line to swap currentNode --> nextNode
        currentPos ++;
    }
    start.next = newList;
    tail.next = currentNode;
    
    if (m > 1) {
        return head;
    } else {
        return newList;
    }
}