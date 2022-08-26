class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

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

    insertAt(index, data) {
        // 함수 본문에서는 가장 먼저 예외 처리를 해보겠습니다.
        //  연결리스트의 크기보다 큰 곳을 삽입하거나 음수위치에 삽입하는 경우 에러를 발생시킵니다.

        if (index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data);
        // 두가지 상황을 고려해서 만들겠습니다.
        //  첫 번째 상황은 리스트의 가장 앞부분에 삽입하는 경우로
        //  1st.새로 삽입하는 노드가 head 가 되어야 하는 경우입니다.
        // 두번째 상황은 가장 앞부분을 제외한 나머지 부분에 삽입하는  경우로
        // head 노드에서 next 로 목표 인덱스까지 계속 참조해서 가는 경우입니다.
        // 이 두가지 상황을 나누는 코드를 작성하겠습니다.

        if (index == 0) {
            // 새로 생성한 노드의 next 가 head 를 가리키게 해주고
            newNode.next = this.head;
            // 새로 생성한 노드를 head 로 변경해주면 됩니다.
            this.head = newNode;
        } else {
            // else 문을 완성 시켜보겠습니다.
            // 이 부분은 원하는 인덱스까지 노드를 타고 들어가서 새로 삽입하는 경우입니다.
            // 만약에 인덱스 3에 삽입한다면 head 노드에서 세번째 떨어진 노드에 삽입하는 경우입니다.
            // currentNode로 세 번째 떨어진 노드 전 까지 이동하고,
            // newNode 가 currentNode가 가리키던 노드 ,  즉 세번째 노드를 가리키게 합니다. 그리고 커런트노드가 새로운 노드를 가르키게 하면 끝납니다.
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
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

        if (index === 0) {
            let deleteNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deleteNode;
        } else {
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deleteNode;
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
// 8월27일a
export { Node, LinkedList };
