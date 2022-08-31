import { HashSet } from "./HashSet.mjs";

let hashSet = new HashSet();

console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("=== 데이터 삽입 === ");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(244);
hashSet.add(512);
hashSet.printAll();

console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("====== 데이터 체크 1 ====");
// 이번엔 셋이 조금 전에 삽입한 1이 있는지 isContain() 함수로 체크
console.log(`isContain: ${hashSet.isContain(1)}`);

console.log("=== 데이터 1제거 ===");
hashSet.remove(1);
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("=== 데이터 체크 2 ===");
console.log(`isContain: ${hashSet.isContain(1)}`);

console.log("====== clear =====");
hashSet.clear();
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
