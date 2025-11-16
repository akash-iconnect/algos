// https://leetcode.com/problems/reverse-linked-list/


//   1 -> 2 -> 3
//   1 <- 2 <- 3
// p h    n


var reverseLinkedList = function(head) {
    let prev = null;

    while(head) {
        let nextNode = head.next;
        head.next = prev;
        // move pointers
        prev = head;
        head = nextNode;
    }
    // return prev as prev will be head
    return prev;
};

// copy