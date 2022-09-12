// index 2
// 1. 기존 피보나치 함수의 이름을 fibonacci1 으로 변경해주겠습니다.

function fibonacci1(n) {
    if (n == 0 || n == 1) return n;
    return fibonacci1(n - 2) + fibonacci1(n - 1);
}

// 2. 새로만드는 함수는 이름은 fibonacci2 로 만들어보겠습니다.
function fibonacci2(n, memo) {
    // 3. 계산 메모를 하기 위해 매개변수에 memo 를 추가해주겠습니다.
    // 기저 조건은 똑같이 만들어줍니다.
    if (n == 0 || n == 1) return n;
    // 4.객체 (해시 테이블)에 해당 값의 계산 결과가 있는지 "검색"합니다.
    if (memo[n] == null) {
        memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
    }
    // if 문을 나온 이 부분은 memo 객체에 n의 계산 결과가 들어있습니다.
    // 매개변수로 전달받은 memo 에 계산결과가 들어있거나, 없다면 if 문에 걸려서 계산했기 때문입니다.
    // 그러면 memo에서 n을 검색해서 리턴해줍니다
    return memo[n];
}

//  ###출력
// console.log(fibonacci1(5));
// console.log(fibonacci2(5, {}));
// 둘다 5가 나옵니다 . 결과만 보면 두 함수의 성능 차이를 못 느끼겠습니다.

// 5. 한번 실행시간을 측정해보겠습니다.
// 먼저 Date()함수로 시작 시간을 정해줍니다.
let start = new Date();
// 그리고 fibonacci1() 함수 다음 줄에서 종료시간을 저장해줍니다.
console.log(fibonacci1(40));
let end = new Date();
console.log(`fibonacci1 함수 실행시간 : ${end - start}ms`);

start = new Date();
console.log(fibonacci2(40, {}));
end = new Date();
console.log(`fibonacci2 함수 실행시간 : ${end - start}ms`);
//  #### 출력값
// 5
// fibonacci1 함수 실행시간 : 6ms
// 5
// fibonacci2 함수 실행시간 : 0ms
// 컴퓨터 성능이 개인마다 다르므로 결과는 조금 다를순 있지만 fibonacci() 함수가 더 오래걸리는 것은 차이가 없을겁니다.
//  차이가 별로 안나는것 같지만 n 값을 40으로 변경해서 실행해보겠습니다.
// 출력
//102334155
// fibonacci1 함수 실행시간 : 1635ms
// 102334155
// fibonacci2 함수 실행시간 : 1ms
// 계산할 값이 커지면 커질수록 차이가 엄청 나다 실제로 fibonacci1 성능은 O(n제곱) 성능
// fibonacci2 는 O(n) 의 성능을 보이기 때문입니다.
// 이게 메모이제이션 기법의 강력함
// 마법 처럼 느껴지지만 잃는 부분도 있습니다. 바로 메모리 영역 입니다.
// 메모이제이션은 속도를 위해서 메모리(공간)를 사용합니다. 컴퓨터 영역을 공부를 하다보면
// 속도를 위해 메모리를 사용하게 되는걸 발견 할 수있습니다.
// 대표적으로 메모리와 CPU 의 속도 차이를 극복하기 위한 캐시라는 것이 있습니다.
