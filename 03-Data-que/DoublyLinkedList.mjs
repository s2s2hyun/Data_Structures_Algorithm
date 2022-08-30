class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        // 1. 기존에는 리스트의 시작 부분을 head 로 가르켰는데
        // 큐를 구현하기 위해 리스트의 끝을 가르키는 프로퍼티도 추가해주겠습니다. tail
        this.tail = null;
        this.count = 0;
    }

    // 2. 모든 노드가 이전 노드를 참조해주는 기능만 구현하면 됩니다.
    // 그럼 insertAt() 함수와 deleteAt() 함수를 수정해서 데이터가 삽입,삭제 될때 이전 노드를 참조하는 코드만 넣어주겠습니다.

    printAll() {
        let currentNode = this.head;
        let text = "[";

        while (currentNode != null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if (currentNode != null) {
                text += ", ";
            }
        }

        text += "]";
        console.log(text);
    }

    clear() {
        this.head = null;
        this.count = 0;
    }
    // 3. head 에 새로운 노드를 삽입할때
    // 기존 head 가 가리키던 노드의 이전 노드를 새로 삽입한 노드로 설정합니다.
    // 데이터가 0개 일때 , 즉 head 가 null 일때 에러가 나지않도록 if 문을 넣어주겠습니다.
    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data);
        // if(){} head 에 삽입하는경우
        if (index == 0) {
            newNode.next = this.head;
            if (this.head != null) {
                this.head.prev = newNode;
            }
            this.head = newNode;
            // else if  tail 에 삽입하는경우
        } else if (index == this.count) {
            newNode.next = null;
            newNode.prev = this.tail;
            this.tail.next = newNode;
            // else 밑으론 그외 위치에 삽입하는경우
        } else {
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            newNode.prev = currentNode;
            currentNode.next = newNode;
            newNode.next.prev = newNode;
        }

        if (newNode.next == null) {
            this.tail = newNode;
        }
        this.count++;
    }

    insertLast(data) {
        this.insertAt(this.count, data);
    }

    deleteAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error("제거할 수 없습니다.");
        }

        let currentNode = this.head;

        if (index == 0) {
            let deletedNode = this.head;
            // if () 데이터가 1개일때 head,tail
            if (this.head.next == null) {
                this.head = null;
                this.tail = null;
                // else{} 데이터가 2개 이상일 때
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.count--;
            return deletedNode;
        } else if (index == this.count - 1) {
            let deletedNode = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.count--;
            return deletedNode;
        } else {
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            let deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
            this.count--;
            return deletedNode;
        }
    }

    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export { Node, DoublyLinkedList };
