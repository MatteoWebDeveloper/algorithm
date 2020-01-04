class ListNode {
    constructor({ data, next }) {
        this.data = data;
        this.next = next;
    }

    setNext(node) {
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode({
            next: null
        });
    }

    findLastNode() {
        function traverseLinkedList(node) {
            if (node.next !== null) {
                return traverseLinkedList(node.next);
            }

            return node;
        }

        return traverseLinkedList(this.head);
    }

    addNode(data) {
        let newNode = new ListNode({
            data,
            next: null
        });

        let lastNode = this.findLastNode();

        lastNode.setNext(newNode);
    }

    getHead() {
        return this.head;
    }
}

function createLinkedList() {
    return new LinkedList();
}

export { createLinkedList };
