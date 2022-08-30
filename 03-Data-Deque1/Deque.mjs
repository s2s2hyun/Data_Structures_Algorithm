import { DoublyLinkedList } from "../03-Data-que/DoublyLinkedList.mjs";

class Deque {
    constructor() {
        this.list = new DoublyLinkedList();
    }
    //   printAll() 함수는 이중연결리스트의 printAll() 함수를 호출해주면 끝입니다.
    printAll() {
        this.list.printAll();
    }

    addFirst(data) {
        this.list.insertAt(0, data);
    }

    removeFirst() {
        return this.list.deleteAt(0);
    }
    // 우리는 큐를 구현할 때 DoublyLinkedList 클래스 내 insertAt() 함수에서
    // 마지막 인덱스에 삽입하는 경우 , tail 을 이용해서 O(1)의 성능으로 삽입하도록 수정했습니다.
    // addLast() 함수도 insertAt() 함수를 이용하면 쉽게 구현할 수 있습니다.
    addLast(data) {
        this.list.insertAt(this.list.count, data);
    }

    removeLast() {
        return this.list.deleteLast();
    }
    isEmpty() {
        return this.list.count == 0;
    }
}

export { Deque };
