import { LinkedList } from "../01-Data_structures/LinkedList.mjs";
// 1. 스택을 이전에 만들었던 연결리스트로 만들 예정이기때문에 LinkedList import

// 2. 스택 클래스를 만들어줍니다.

// 3.생성자(constructor)를 만들어 스택이 초기화할 때 빈 리스트를 생성하도록 해줍니다.

// 4. 데이터를 넣기 위한 push 함수를 추가하겠습니다.  push 함수는 연결리스트의 head 에 삽입하는데
//    이는 연결리스트 insertAt()함수로 index O에 데이터를 삽입하면 됩니다.

// 5. 데이터를 꺼내기 위한 pop 함수를 추가 .  deleteAt() 함수로 index O 를 제거하면 됩니다.

// 6. peek 함수는 스택의 TOP(head)에 데이터를 참고
// 연결리스트의 getNodeAt() 함수로 첫 번째 데이터를 읽어오고 리턴

// 7. isEmpty() 함수는 스택이 비어있으면 true, 비어있지 않으면 false 로 리턴
// 이는 연결리스트 count 를 O 과 비교하면 알 수 있습니다.

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.insertAt(0, data);
    }

    pop() {
        try {
            return this.list.deleteAt(0);
        } catch (e) {
            return null;
        }
    }

    peek() {
        return this.list.getNodeAt(0);
    }

    isEmpty() {
        return this.list.count == 0;
    }
}

export { Stack };
