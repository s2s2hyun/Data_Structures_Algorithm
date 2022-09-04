// #1. 배열을 받을 매개변수 arr를 만들어줍니다.
function BubbleSort(arr) {
    // 2. 배열을 순회할 for문을 만들어보자
    // 만약에 배열에 원소가 4개가 존재한다면 자리교체는 최대 3번을 해야하므로
    // 배열의 길이보다 -1 만큼 해줘야한다.
    for (let i = 0; i < arr.length - 1; i++) {
        // 3. 지금 만든 for문 안에 for문을 하나 더 만들어줘야합니다.
        // 새로만들 for문은 첫 번째 원소부터 정렬이 된 원소의 이전 원소보다 하나 이전의 원소까지 순회 해야합니다.
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
// 4.테스트 코드 작성
let arr = [4, 2, 3, 1];
console.log("==== 정렬 전 ===== ");
console.log(arr);

BubbleSort(arr);

console.log("==== 정렬 후 ====");
console.log(arr);

// 5.Node 실행시 출력
// ==== 정렬 전 =====
// [ 4, 2, 3, 1 ]
// ==== 정렬 후 ====
// [ 1, 2, 3, 4 ]
