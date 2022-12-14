// 퀵 정렬 (Quick Sort)

// 퀵정렬은 이전에 알아본 병합 정렬과 같이 분할 정복 알고리즘에 속합니다.

// 당연히 재귀를 사용합니다.

// 퀵 정렬 성능

// 퀵 정렬은 피벗을 기준으로 배열을 반으로 나눕니다.

// 이렇게 데이터가 한개가 될때까지 나눕니다.

// 이 과정은 logn 으로 볼수있습니다.

// 이렇게 나눠진 단계를 배열의 원소 수 n만큼 나눠져야하니

// nlogn

// 하지만 이 성능은 평균적인 경우를 나타냅니다.

// 최악의 경우는 피벗이 중간이 아닌 한쪽으로 치우친 경우로 O (n제곱)의 성능으로 보입니다.

// 따라서 최악의 경우를 표현하자면 O(n제곱) 입니다.

// 하지만 퀵 정렬은 대부분의경우 좋은 피벗을 선택하고 , 최악의 경우가 발생할 확률이 극히 낮아서 평균적인 성능을 말합니다.

// 성능만 보면 병합 정렬이 더 좋다고 볼수 있는데 실제로 병합 정렬과 비교하면 퀵정렬이 더 적은 비교와 더 적은 메모리 공간을 차지 하기 때문에 더 좋은 알고리즘으로 평가됩니다.

// 퀵정렬의 장단점도 병합 정렬과 동일합니다.
