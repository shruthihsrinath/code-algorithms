function cyclicLinkedList(head) {
    if (!head) return false;
    let slow = head, fast = head;
    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) return false;
    }

    return true;
}