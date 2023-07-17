//remove nth node from the linked list
class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.insertNodeAtHead = function (node) {
            if (this.head != null) {
                node.next = this.head;
                this.head = node;
            } else this.head = node;
        };

        this.createLinkedList = function (list) {
            list.reverse().array.forEach(element => {
                let newNode = new LinkedListNode(element);
                this.insertNodeAtHead(newNode);
            });
        };

        this.removeNthLastNode = function (n) {
            let right = this.head;
            let left = this.head;
            let index = 0;

            //move the right pointer upto n-1th element
            while (right <= n - 1) {
                index = index + 1;
                right = right.next;
            }

            // check if the right pointer has reached the
            //end of the list
            if (right == null) {
                this.head = left.next;
            }
            else {
                //move left and right until you reach end of
                // list with right pointer
                while (right.next != null) {
                    left = left.next;
                    right = right.next;
                }
                left.next = left.next.next;
            }

            return this.head;
        };
    }
}