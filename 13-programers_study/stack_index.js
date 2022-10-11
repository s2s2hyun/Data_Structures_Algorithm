// // 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// // "()()" 또는 "(())()" 는 올바른 괄호입니다.
// // ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

// // '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// // 제한사항
// // 문자열 s의 길이 : 100,000 이하의 자연수
// // 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

// // 입출력 예
// // s	answer
// // "()()"	true
// // "(())()"	true
// // ")()("	false
// // "(()("	false
// // 입출력 예 설명
// // 입출력 예 #1,2,3,4
// // 문제의 예시와 같습니다.

// // 스택을 이용해서 풀이해보면 스택이 빈배열이면 true 아니면 false 라고 생각을 해보고 풀이

// // for (const c of s) => for .. of 반복문을 통한 풀이
// // for .. of 반복문은 일반적으로 배열에 많이 사용되는데 , 배열의 요소 개수 만큼 반복하고 , 반복 때 마다 각 요소들을 사용할 수 있는 변수가
// // 주어지는 독특한 반복문이라고 할 수 있다.
// // // {
// //         #### 문법
// //         for( 변수 of 배열){
// //             반복문 동작 부분
// //         }
// // }

// function solution(s) {
//     const stack = [];
//     for (const c of s) {
//         if (c === "(") {
//             stack.push(c);
//         } else {
//             if (stack.length === 0) {
//                 return false;
//             }
//             stack.pop();
//         }
//     }
//     return stack.length === 0;
// }

function solution(s) {
    let count = 0;
    for (const c of s) {
        if (c === "(") {
            count += 1;
        } else {
            if (count === 0) {
                return false;
            }
            count -= 1;
        }
    }
    return count === 0;
}
