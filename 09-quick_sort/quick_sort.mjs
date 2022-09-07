function quickSort(arr, left, right) {
    // 1.배열을 담을 arr 를 만들고
    // 범위를 나눈 배열을 재귀적으로 호출하기 때문에
    // 범위를 나타낼 left ,right 를 나타냅니다.
    // 기저 조건은 left 값이 right 값보다 크지 않을 때로 넣어줍니다.
    // left 가 더 크다면 배열의 범위가 정상적이지 않다는걸 뜻하기 때문이죠
    if (left <= right) {
        // 2. 이제 우리가 좀 전에 배운 퀵 정렬을 수행할 함수를 호출해줍니다.
        // 정렬하는 기능은 따로 divide 라는 함수로 만들어주겠습니다.
        // divide()함수는 조금 뒤에 구현해봅시다.
        let pivot = divide(arr, left, right);
        // 이렇게 배열과 함께 left 와 right 로 범위를 지정해주면
        // 여기서 피벗을 지정해서 피벗 하나를 정렬합니다.
        // divide()함수는 정렬된 피벗의 위치를 리턴하는데
        // 이를 pivot 이라는 변수에 저장합니다.
        // pivot의 위치에 데이터는 정렬이 됐기 때문에 왼쪽 영역을 정렬시켜줍니다.
        quickSort(arr, left, pivot - 1);
        // left 는 0 , right 에는 pivot 에서 1 뺀 값, 즉 3이 전달 됩니다.

        // 마찬가지로 정렬된 pivot의 오른쪽 영역을 정렬 시켜줍니다.
        quickSort(arr, pivot + 1, right);
        // left 는 pivot 에서 1더한 값 , 즉 5가 전달되고 right 는 8이 전달됩니다.
        // quickSort()함수 구현은 끝났습니다. 이제 제일 중요한 divide() 함수를 구현해줘야합니다.
        // divide()함수는 실제로 피벗을 지정하고 정렬하는 함수 입니다.
    }
}

function divide(arr, left, right) {
    // 가장 먼저 피벗을 정해줍니다. 우리는 간단하게 배열의 가장 왼쪽값을 피벗으로 설정하기로 했기 때문에
    // left 값을 pivot 변수에 저장합니다.
    let pivot = arr[left];
    // 지금 보이는 배열로 설명하면 피벗은 5로 설정됩니다.
    // 이제 leftStartIndex를 선언해줍니다. 가장 왼쪽은 피벗으로 설정되어있으므로 다음 한칸 오른쪽으로 설정해줍니다.
    let leftStartIndex = left + 1;
    // 이 배열에서 1번 인덱스입니다.
    // rightStartIndex 도 선언해줍니다.
    let rightStartIndex = right;
    // 이배열에서 8번 인덱스 입니다.(맨끝)
    // 이제 lfetStartIndex 와 rightStartIndex 가 서로 지나칠 때 까지 반복해야함으로 while 문으로 넣어줍니다.
    while (leftStartIndex <= rightStartIndex) {
        // leftStartIndex 가 rightStartIndex 보다 크다면 서로 지나친 것이기 때문에 조건문은 이렇게 해줍니다.
        // 이제 leftStartIndex 를 pivot 보다 큰값을 만날때까지 오른쪽으로 보내야합니다.
        while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
            leftStartIndex++;
        }
        // leftStartIndex가 멈췄다면 rightStartIndex 가 왼쪽으로 이동시켜줘야합니다.
        // pivot 보다 작은 값을 만날때까지 계속 반복해줍니다.
        // pivot 을 제외한 배열의 범위 안에서 피벗의 값이 rightStartIndex 보다 작거나 같다면
        // 계속 왼쪽으로 이동합니다.
        while (rightStartIndex >= left + 1 && pivot <= arr[rightStartIndex]) {
            rightStartIndex--;
        }
        // rightstart가 멈췄다면
        // leftStartIndex 와 rightStartIndex 를 교환해줘야합니다.
        // 단 조건이 있습니다. 둘이 지나치지 않은 경우여야 합니다.
        if (leftStartIndex <= rightStartIndex) {
            // swap 함수는 조금 뒤에 구현해주겠습니다.
            swap(arr, leftStartIndex, rightStartIndex);
        }
    }
    // 위 반복문이 끝나면 leftStartIndex 와 rightStartIndex 가 지나치게 됩니다.
    // 이때 pivot 의 위치와 rightStartIndex 를 교환해주면 pivot 에 해당하는 숫자는 자기 자리를 찾아 정렬됩니다.
    // pivot 과 rightStartIndex 를 교환해줍니다.
    swap(arr, left, rightStartIndex);
    // 그리고 정렬된 데이터의 인덱스를 리턴하며 함수를 종료합니다.

    return rightStartIndex;
}

// 두 값을 교환하는 swap()함수도 만들어주겠습니다.

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// 이제 정렬되지 않은 배열을 선언해주고
let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];

// 바로 출력해줍니다.

console.log("===== 정렬 전 ====");
console.log(arr);

quickSort(arr, 0, arr.length - 1);

console.log("==== 정렬 후 ====");
console.log(arr);

// 출력값
// ===== 정렬 전 ====
// [
//   5, 3, 7, 2, 6,
//   4, 9, 1, 8
// ]
// ==== 정렬 후 ====
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
