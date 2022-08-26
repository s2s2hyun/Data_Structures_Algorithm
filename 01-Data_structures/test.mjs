import { Node, LinkedList } from "./LinkedList.mjs";

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();

console.log("==== insertAt() 다섯번째 호출 ====");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();

console.log("==== clear() 호출 ====");
list.clear();
list.printAll();

console.log("==== insertLast() 세번 호출 ====");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll();

console.log("==== deleteAt() 호출 ====");
list.deleteAt(0);
list.printAll();
list.deleteAt(1);
list.printAll();

console.log("==== deleteLast() 3번호출 ===");

list.insertLast(5);
list.deleteLast();
list.deleteLast();
list.printAll();
// 에러가 발생된다 . 이 에러는 리스트에 데티어가 존재 하지않는데
// deleteLast() 호출해서 그렇다 데이터가 2개인데 deleteLast 세번을 호출해서이다.

// 추상자료형의 마지막인 getNodeAt() 함수
console.log("==== getNodeAt() 호출 ==== ");
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

let secondNode = list.getNodeAt(2);
console.log(secondNode);
// 8월27일
