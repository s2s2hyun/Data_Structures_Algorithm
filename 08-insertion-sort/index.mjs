// 삽입정렬 분석

// 버블정렬 , 선택 정렬과 같은 패턴의 for문을 하고있습니다.
// 삽입 정렬의 성능도 O(n제곱)입니다.
// 삽입 정렬의 장단점도 버블 정렬과 선택 정렬의 장단점이 같습니다.
// 장점 - 이해와 구현이 쉽다는 장점
//  단점 - 성능이 좋지 못하다는 단점

function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let insertingData = arr[i];

        let j;

        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > insertingData) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }

        arr[j + 1] = insertingData;
    }
}
