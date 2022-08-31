import { DoublyLinkedList } from "../../03-Data-que/DoublyLinkedList.mjs";

class HashData {
    constructor(key, value) {
        // get() 함수와 remove() 함수에서 데이터의 key가 무엇인지
        // 알아야하기 때문에 key 프로퍼티를 생성
        this.key = key;
        this.value = value;
    }
}

// 해시테이블 생성

class HashTable {
    constructor() {
        this.arr = [];
        for (let i = 0; i < 10; i++) {
            this.arr[i] = new DoublyLinkedList();
        }
    }
    // 해시테이블에선 가장 중요한 해시함수인데 간단하게 생성해봅시다.
    hashFunction(number) {
        return number % 10;
    }
    // 이제 데이터를 삽입하는 set()함수를 만들어보겠습니다.
    set(key, value) {
        // 우리의 해시 테이블은 0부터 9까지 10개의 배열은 각각 이중연결리스트를 가지고있습니다.
        // 해시 함수를 거쳐서 배열의 인덱스를 결정하면 그 인덱스의 연결리스트에 삽입하도록 하겠습니다.
        this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
    }
    // 해당 key의 데이터를 읽는 get() 함수를 만들어 보겠습니다.
    get(key) {
        let currentNode = this.arr[this.hashFunction(key)].head;
        while (currentNode != null) {
            if (currentNode.data.key == key) {
                return currentNode.data.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    remove(key) {
        let list = this.arr[this.hashFunction(key)];
        let currentNode = list.head;
        let deleteIndex = 0;
        while (currentNode != null) {
            if (currentNode.data.key == key) {
                return list.deleteAt(deleteIndex);
            }
            currentNode = currentNode.next;
            deleteIndex++;
        }
        return null;
    }
}

export { HashTable };
