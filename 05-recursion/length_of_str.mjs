function strLength(arr) {
    //  1.현재 배열에서 마지막 원소를 뺀 값, 즉 0번 인덱스부터 3번 인덱스까지
    // 2.문자열을 재귀함수로 호출해주고 나머지 원소는 하나이기 때문에 +1을 해줍니다.
    // 3. 배열의 0번 인덱스가 없으면 문자열이 없는 것이므로 길이는 0 입니다.
    // 완성했습니다 . 테스트를 해보겠습니다.

    if (arr[0] == null) return 0;
    return strLength(arr.slice(0, -1)) + 1;
}

// 재귀함수로 문자열의 길이를 어떻게 계산해야할까요 ?
// 하위문제를 생각해보겠습니다.
// 구하려는 문자열의 마지막 원소를 제외한 나머지 부분입니다.
// 길이가 5인 문자열로 예를 들면
// "a,b,c,d,e" 우리는 index0~index 3번까지 (a,b,c,d) 문자열의 길이는 해결됐다고 가정하고,
// 이 결과값으로 나머지 길이를 구해주면 됩니다.
// 나머지 길이를 구하는것은 아주 쉽습니다.
// 문자가 하나 있기 때문에 1을 카운트하면 됩니다.
// e

// 길이가 5인 문자열을 선언해주고
let str = "abcde";
// 문자열의 길이를 계산하기 위해서 strLength()를 호출해줍니다.
let len = strLength(str);
console.log(len);
// 길이가 5가 출력됩니다.
