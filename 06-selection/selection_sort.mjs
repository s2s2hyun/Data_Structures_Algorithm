function SelectionSort(arr) {
    // 1. 배열을 받을 매개변수 arr 를 만들어줍니다.
    // 2. 이제 for문을 만들어 줄건데 마지막 원소는 자동으로 정렬되기 때문에
    // 배열의 원소가 n개라면 n-1 번 반복시켜두록 하겠습니다.
    for (let i = 0; i < arr.length - 1; i++) {
        // 3. 이제 정렬되지 않은 영역의 첫 번째 원소부터 마지막 원소중에
        // 최소값을 가진 인덱스를 저장할수 있는 변수를  만들어줍니다.
        let minValueIndex = i;
        // i를 넣어준 이유는 이 반복문을 한번 진행할때마다 최소값이 하나 정렬되기 때문에
        // 정렬된 영역은 반복에서 제외하기 위함입니다.

        // 4.이제 정렬되지 않은 영역의 첫 번째 원소부터 마지막 원소까지 순회하며 가장 작은 값을 찾기 위한
        // for문을 만들어 주겠습니다.
        for (let j = i + 1; j < arr.length; j++) {
            // i의 값은 minvalueIndex 에 저장했기에 j를 i 보다 +1 해줍니다.
            // 그리고 배열의 마지막 원소까지 반복해줍니다. 정렬되지 않은 영역을 순회하다가 가장 작은 값을 발견하면
            // minValueIndex 에 가장 작은 값의 위치를 저장해주겠습니다.
            if (arr[j] < arr[minValueIndex]) {
                // 현재 인덱스에 가장 작은값으로 저장해줍니다.
                minValueIndex = j;
            }
        }
        // 5. 먼저 정렬되지 않은 영역의 첫 번째 원소를 임시 변수인 temp에 넣어줍니다.

        let temp = arr[i];
        // 그리고 첫 번째 원소를 가장 작은 값으로 덮어 쓰고
        arr[i] = arr[minValueIndex];
        // 가장 작은 값이 있던 자리에 temp 값을 덮어써줍니다.
        arr[minValueIndex] = temp;
        // 6. 이런식으로 for문을 전부 거치면 모든 원소가 정렬됩니다.
    }
}

// 7. 테스트 코드 작성
let arr = [4, 2, 1, 3];

console.log("==== 정렬 전 ====");
console.log(arr);

SelectionSort(arr);
console.log("==== 정렬 후 =====");
console.log(arr);

// 출력값
// ==== 정렬 전 ====
// [ 4, 2, 1, 3 ]
// ==== 정렬 후 =====
// [ 1, 2, 3, 4 ]
