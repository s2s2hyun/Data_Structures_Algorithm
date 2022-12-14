// 병합 정렬 - merge sort

// 이전에 배운 정렬 과 비교하면 조금 복잡한 정렬 알고리즘에 속합니다.

// 하지만 그림을 그려가며 천천히 그려가면 충분히 이해 할수있다!

// 이전에 배운 정렬보단 조금 더 어려워진 만큼 더 천천히 해보자

// " 해결 하기 힘든 문제가 발생한다면 이걸 한 번에 해결하려고 하지 말고, 해결하기 쉬울 정도로 문제를 쪼갠 다음 하나씩 해결해라 !"

// 이말을 "divide and conquer" 라고 합니다.
// -한글로 "분할 정복" 이라고 합니다.

// 우리가 해결하려는 문제는 " 정렬"이라는 문제입니다.
// 이 문제를 어떻게 쪼개고 하나씩 해결하는지 알아보자

// 병합정렬의 성능을 알아보자

// 병합 정렬에서 성능을 평가하는 부분은 Merge()함수 내 흩어진 배열을 합치는 배열입니다.

// 하나의 데이터와 하나의 데이터가 두개로 합쳐질때 비교연산을 두번합니다.

// 마찬가지로 두개의 데이터와 두개의 데이터가 4개로 합쳐질때는 비교가 4번 이루어집니다.

// 각 단계를 거칠 때 마다 영역의 수가 반으로 줄어들기 때문에

// logn 으로 비교할수있습니다.분할된 배열을 병합 할 때는 n개의 데이터를 n번을 비교함으로 n과 logn 곱해서

// O(nlogn)의 성능이 나옵니다.

// 장단점

// 단점 - 재귀적인 기법으로 이해하기가 조금 어렵습니다.
// 이해와 구현이 어렵다.
// 장점 - O(nlogn) 지금 까지 배운 정렬보다 성능이 훨신 좋다는 장점을 가지고 있습니다.
