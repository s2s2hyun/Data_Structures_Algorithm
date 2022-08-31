import { HashTable } from "./HashTable.mjs";

let hashTable = new HashTable();

hashTable.set(1, "이운재");
hashTable.set(4, "최진철");
hashTable.set(20, "홍명보");
hashTable.set(6, "유상철");
hashTable.set(22, "송종국");
hashTable.set(21, "박지성");
hashTable.set(5, "김남일");
hashTable.set(10, "이영표");
hashTable.set(8, "최태욱");
hashTable.set(9, "설기현");
hashTable.set(14, "최용수");

console.log(`1: ${hashTable.get(1)}`);
// remove 제거 1번 데이터 이후 콘솔 null
hashTable.remove(1);
console.log(`1: ${hashTable.get(1)}`);
// 나머지의 1의 값이 1이운재 데이터를 제거후 그 이후 박지성 나머지 1 데이터 확인
console.log(`21: ${hashTable.get(21)}`);
