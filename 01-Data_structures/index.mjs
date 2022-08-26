// average.mjs

// 일반 변수의 처리방법
// 변수를 추가하고 계산 하는 코드
a;
// let a = 87;
// let b = 70;
// let c = 100;
// let d = 55;

// let average = (a+b+c+d) /4

// 평균값

// 배열의 처리 방법
// 똑같이 평균값을 구한다고 가정하에 배열에 데이터를 넣고 한다면aa

let arr = [87, 70, 100, 55];

let average = 0;

for (let i = 0; i < arr.length; i++) {
    average += arr[i];
}

average /= arr.length;
