import { HashTable } from "../hashTable/HashTable.mjs";

class HashSet {
    constructor() {
        // 생성자에서는 셋에 이용할 해시 테이블을 초기화 해줍니다.
        this.hashTable = new HashTable();
    }

    add(data) {
        if (this.hashTable.get(data) == null) {
            this.hashTable.set(data, -1);
        }
    }
    isContain(data) {
        return this.hashTable.get(data) != null;
    }

    remove(data) {
        this.hashTable.remove(data);
    }

    clear() {
        for (let i = 0; i < this.hashTable.arr.length; i++) {
            this.hashTable.arr[i].clear();
        }
    }

    isEmpty() {
        let empty = true;
        for (let i = 0; i < this.hashTable.arr.length; i++) {
            // 해당 배열의 리스트 카운트가 O 보다 크면 비어있지
            // 않다는 뜻이므로 empty 변수에 false 를 넣어주고 break 로 for문을 빠져나갑니다.
            if (this.hashTable.arr[i].count > 0) {
                empty = false;
                break;
            }
            // 데이터가 하나라도 있으면 더 이상 for문을 순회할 필요가 없기 때문이다.
        }
        return empty;
    }
    printAll() {
        // 먼저 해시 테이블의 배열을 순회합니다.
        // 그리고 해당 배열의 리스트를 순회하기 위해 head를 참조합니다.

        for (let i = 0; i < this.hashTable.arr.length; i++) {
            let currentNode = this.hashTable.arr[i].head;
            // 현재 노드를 리스트의 끝까지 이동시키면서
            while (currentNode != null) {
                // 현재 노드의 key를 출력합니다.
                console.log(currentNode.data.key);
                currentNode = currentNode.next;
            }
        }
    }
}

export { HashSet };
