function MergeSort(arr, leftIndex, rightIndex) {
    // 1. 정렬할 배열이 담긴 매개변수 arr
    // 배열의 시작 인덱스를 나타내는 leftIndex,
    // 배열의 마지막 인덱스를 나타내는 rightIndex를 나타내줍니다.
    // leftIndex 와 rightIndex 는 재귀로 호출할 때 필요한 매개변수입니다.

    if (leftIndex < rightIndex) {
        // 2.즉 배열의 원소가 1개일 때까지 분할하기 위해 if 문을 넣어줍니다.
        // 이것이 기저 조건이 됩니다.
        // ex) 1,2,3,4,5,6,7,8  => 0~7 index 이므로
        // left엔 가장 작은값의 index는 0이고 right 에 가장큰 index는 7이니
        // 지금은 leftIndex(0)가 rightIndex(7) 보다 작으니 if문이 참이됩니다.
        // 배열을 분할하기 위해서 중간값을 구해줍니다.
        // leftIndex(0) + rightIndex(7) / 2 은 =3.5이므로 배열의 인덱스로는 정수만
        // 사용할수 있으므로 parseInt() 함수로 정수로 변환해줍니다.3.5는 3이 됩니다.

        let midIndex = parseInt((leftIndex + rightIndex) / 2);
        // 즉 midIndex 는 3이 들어갑니다.
        // 3.이제 배열의 왼쪽 영역을 재귀적으로 호출해 정렬해줍니다.
        MergeSort(arr, leftIndex, midIndex);
        // 4. 그리고 배열의 오른쪽 영역을 재귀적으로 호출해 정렬해줍니다.
        MergeSort(arr, midIndex + 1, rightIndex);

        // 5. 두번의 재귀함수를 호출했다면 arr 는 중간을 기준으로 정렬이 완료되었을 것입니다.
        // 그럼 이렇게 반반씩 정렬된 배열을 정렬하며  병합하는 함수를 만들어보겠습니다.
        // 함수이름은 Merge라고 하겠습니다.
        Merge(arr, leftIndex, midIndex, rightIndex);
        // 시작 부분인 leftIndex 와 중간 지점인 midIndex ,마지막 인덱스인 rightIndex를 전달해주겠습니다.
        // 그럼 이제 merge()함수만 정의해서 완성해주면 되겠죠 ?
        // MergeSort() 함수밖에 Merge()함수를 새로 만들어주겠습니다.
    }
}

function Merge(arr, leftIndex, midIndex, rightIndex) {
    // 6.가장 먼저 왼쪽 영역의 몇 번째까지 정렬됐는지 알려주는 leftAreaIndex를 만들어준다.
    let leftAreaIndex = leftIndex;
    // 7. 가장 먼저 오른쪽 영역의 몇번째 까지 정렬됐는지 알려주는 rightAreaIndex 를 만들어준다.
    let rightAreaIndex = midIndex + 1;
    // midIndex 가 3이니 1을 더해서 4입니다.
    //  [2,3,4,5,1,6,7,8]
    // 지금 배열에서 네 번째 인덱스는 1을 가리킵니다.
    // 8. 이제 원본 배열과 길이가 똑같은 0으로 초기화된 배열을 만들어주겠습니다.
    // [0,0,0,0,0,0,0,0]
    let tempArr = [];
    tempArr.length = rightIndex + 1;
    tempArr.fill(0, 0, rightIndex + 1);
    // 9 . 새로 만든 배열에 어디까지 정렬이 됐는지 알려주는 변수
    // tempArrIndex 를 만들어보겠습니다.
    let tempArrIndex = leftIndex;
    // 이제 왼쪽 영역과 오른쪽 영역을 비교하면서 tempArr에 작은수를 넣어주겠습니다.
    // 왼쪽 영역의 끝이나 오른쪽 영역의 끝으로 갈 때 까지 반복해주겠습니다.
    while (leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
        if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
            // 10.왼쪽 영역의 데이터가 오른쪽 영역의 데이터보다 작거나 같다면
            // 왼쪽 영역의 데이터를 tempArr에 넣어주고 leftAreaIndex 를 1 늘립니다.
            tempArr[tempArrIndex] = arr[leftAreaIndex++];
        } else {
            // 11. 그렇지 않고 왼쪽 영역의 데이터가 오른쪽 영역의 데이터 보다 크다면
            // 오른쪽 영역의 데이터를 tempArr에 넣어주고 rightAreaIndex를 1 늘립니다.
            tempArr[tempArrIndex] = arr[rightAreaIndex++];
        }
        tempArrIndex++;
        // tempArr에 데이터를 넣어줬으니 tempArrIndex도 1늘려줍니다.
        // 이제 이 배열이 while 문에서 어떻게 동작하는지 하나씩 따라가 보겠습니다.
    }
    // 12. 만약 오른쪽 영역이 병합이 덜 됐다면
    if (leftAreaIndex > midIndex) {
        // for문을 돌면서 오른쪽 영역 나머지 전부를 차례대로 tempArr에 넣어줍니다.
        for (let i = rightAreaIndex; i <= rightIndex; i++) {
            tempArr[tempArrIndex++] = arr[i];
        }
        // 그렇지 않고 왼쪽 영역이 병합이 덜 됐다면
        // for문을 돌면서 왼쪽 영역 나머지 전부를 차례대로 tempArr에 넣어줍니다.
    } else {
        for (let i = leftAreaIndex; i <= midIndex; i++) {
            tempArr[tempArrIndex++] = arr[i];
        }
    }
    // 이 코드에서 우리 상황은 바로 위 if문이 참입니다.
    //  오른쪽 영역이 병합되지 않았기 때문이죠 . 그럼 이 for문을 거쳐서 tempArr를 거쳐서
    // 병합이 완료됩니다.
    // 이제 tempArr에 정렬이 완료되었습니다 .
    // 마지막으로 tempArr에 있는 데이터를 arr에만 옮겨주면 됩니다.
    for (let i = leftIndex; i <= rightIndex; i++) {
        arr[i] = tempArr[i];
    }
}

// 이제 정렬되지 않은 배열을 선언해주고

let arr = [3, 5, 2, 4, 1, 7, 8, 6];
// 출력해봅니다.
console.log("===== 정렬 전 =====");
console.log(arr);

MergeSort(arr, 0, arr.length - 1);

console.log(" ==== 정렬 후 =====");
console.log(arr);

// ===== 정렬 전 =====
// [
//   3, 5, 2, 4,
//   1, 7, 8, 6
// ]
//  ==== 정렬 후 =====
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
// 매우 잘 동작 합니다.
