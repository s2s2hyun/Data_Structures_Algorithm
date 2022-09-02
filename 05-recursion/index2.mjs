// 팩토리얼 : 팩토리얼은 n 이 주어질 때 1부터 n 까지 모든 수의 곱을 말합니다.
// 만약에 5라고 하면 오 팩토리얼 이라고 읽습니다.

// factorial() 함수

// 1. function factorial(number) {}
// 5팩토리얼은 => 5! = 5 x 4 x 3 x 2 x 1
// 기저 조건을 나중에 생각하기로 하고 먼저 팩토리얼의 로직을 만들어보자
// 재귀함수는 처음에 이해하기가 어려울수도 있다.
// 재귀함수를 쉽게 작성하는 방법을 알아보자
// 재귀 함수 내에서 자기 자신을 호출할때 이 함수가 벌써 구현이 되어있다고 가정하는 것이다.
// 우리는 지금 5! 을 만들어 본다고 가정해본다.
// number = 5가 들어온 상황에서 5!을 구현하는 방법
// 5! = 5 x 4! 과 같습니다.
// 그러면 5*factorial(4) 를 호출하면 됩니다.
// factorial(number) = number * factorial(number -1 ) 이를 코드로 구현해봅시다!
// 2.
// function factorial(number) {
//     return number * factorial(number - 1);
// }
// 팩토리얼은 n부터 1까지 모든 수의 곱으로 n 이 5라면 5x4x3x2x1 입니다.
// 즉 1이 되면 팩토리얼은 종료
// 우리는 이를 기저 조건으로 만들어보겠습니다.
// 그리고 O! 은 1이기 때문에 같이 기저 조건에 넣어주겠습니다.

// 3.
function factorial(number) {
    if (number == 1 || number == 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(5));
// 120이 출력되는걸 확인 할수있다.
