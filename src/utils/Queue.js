class Node {

    constructor(data) {
        this.prev = null;
        this.next = null;
        this.data = data;
    }
}
class Queue {
    constructor() {
        this.length = 0;
        this.head = null;
        this.nextNode = null;
        this.floors = [];
        this.tail = this.head;
    }
    append(data) {
        this.length++;
        let node = new Node(data);
        if(this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            node.next= null;
            this.tail = node;
            return node;
        }
        this.head = this.tail = node;
        return  node;
    }
    // [Symbol.iterator]() {
    //     let nextNode = this.head;
    //     return  {
    //         next: () => {
    //             if ( nextNode ) {
    //                 let result = { value: nextNode.data,  done: false }
    //                 nextNode = nextNode.next;
    //                 return result;
    //             }
    //          //   return { value: null, done: true };
    //         }
    //     }
    // }
}
export default Queue