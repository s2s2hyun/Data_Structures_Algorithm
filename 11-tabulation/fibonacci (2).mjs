// 10-피보나치 수열 수업시간에 했던거에서 추가적인 내용
// function fibonacci3(n)

function fibonacci1(n) {
    if (n == 0 || n == 1) return n;
    return fibonacci1(n - 2) + fibonacci1(n - 1);
}

function fibonacci2(n, memo) {
    if (n == 0 || n == 1) return n;

    if (memo[n] == null) {
        memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
    }

    return memo[n];
}

// 2. 시작
function fibonacci3(n) {
    // 가장 먼저 예외조건부터 넣어주겠습니다.
    // 0이나 1이 들어오면 그대로 리턴 해줍니다.
    if (n <= 1) return n;
    // 0과 1로 초기화 해줍니다.
    let table = [0, 1];
    //  3. 이제 상향식으로 밑에서 부터 계산해 테이블에 결과를 저장합니다.
    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 2] + table[i - 1];
        // 마지막으로 테이블에 저장된 결과를 리턴합니다.
    }
    return table[n];
}

// 4.피보나치 1,2 와 같이 성능을 테스트 하기 위해서 기존에 있던 코드 밑에 fibonacci3()함수를 호출해주겠습니다.

let start = new Date();
console.log(fibonacci1(40));
let end = new Date();
console.log(`fibonacci1 함수 실행시간: ${end - start}ms`);

start = new Date();
console.log(fibonacci2(40, {}));
end = new Date();
console.log(`fibonacci2 함수 실행시간: ${end - start}ms`);

// 5. fibonacci3()
start = new Date();
console.log(fibonacci3(40));
end = new Date();
console.log(`fibonacci3 함수 실행시간: ${end - start}ms`);

// 출력 값
// 102334155
// fibonacci1 함수 실행시간: 1642ms

// 피보나치2는 여러번의 함수 호출로 메모리 공간에 스택을 차지하고
// 메모이제이션을 위한 해시 테이블 공간까지 차지하기 때문에 메모리를 더 많이 사용합니다.
// 102334155
// fibonacci2 함수 실행시간: 0ms

// 피보나치 3는 적은 메모리이여도 빠른시간을 보입니다.
// 102334155
// fibonacci3 함수 실행시간: 0ms
