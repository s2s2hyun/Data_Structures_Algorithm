// 배열은 모든 프로그래밍 언어에서 기본적으로 제공하는 자료구조 입니다 .

// 배열의 특징

// 자바스크립트는 전형적인 배열과 조금 다른 점이 있어서 먼저 일반적인 배열을 설명하고 자바스크립트만의 다른 점을 알아 보겠습니다.

// 일반적인 배열

// -프로그래밍 언어에서 배열은 기본적으로 제공하는 자료구조 입니다.

// 배열의 이해를 위해서는 배열이 메모리에서 어떤 모습을 하고 있는지 알아야한다.

// 일반적으로 프로그래밍 언어에서는 배열을 선언할때 배열의 크기를 알려줍니다.

// ex) int arr[10] = {1,2,3,4,5};

// 이렇게 배열을 선언했다면 운영체제는 메모리에서

// 숫자 10개가 들어갈 수 있는 연속된 빈 공간을 찾아서 순서대로 1,2,3,4,5 를 할당합니다.

// 할당하지 않은 부분은 의미 없는 쓰레기가 저장되어있습니다 .

// 그리고 운영체제는 배열의 시작 주소 , 즉 숫자 1이 들어간 주소만 기억합니다 .

// 프로그래머가 배열의 세 번째 원소에 접근하고 싶다면

// arr[2] 이렇게 인덱스로 한 번에 접근합니다 .

// 운영체제는 배열의 시작 주소를 알고 있기 때문에

// 배열의 시작 주소로 부터 두 번째 떨어진 주소에서 데이터를 가져옵니다.

// 배열의 인덱스 참조는 길이에 상관없이 한 번에 가져오기 때문에 O(1)성능을 가집니다.

// 이렇기 때문에 배열은 읽기/쓰기, 즉 참조에서 좋은 성능을 보입니다.

// 배열의 참조 성능은 좋지만 ,데이터의 삽입 , 삭제 성능은 좋지 못합니다 .

// 이유는

// 앞서 배열을 선언 했다면 프로그래머 요청한 크기만큼 메모리에 연속된 공간을 할당합니다 .,

// 프로그래머가 숫자 10까지 할당하려고

// ex) int arr[10] = {1,2,3,4,5};

// arr[5] = 6

// arr[6] = 7

// arr[7] = 8

// arr[8] = 9

// arr[9] = 10

// 이렇게 한다면 미리 확보한 메모리 공간에 쓰레기 값을 덮어쓰면서 할당된 공간을 차지합니다.

// 프로그래머가 숫자를 15까지 담아서 배열의 크기를 넘어서 할당한다고 가정하겠습니다.

// arr[10] = 11

// arr[11] = 12

// arr[12] = 13

// arr[13] = 14

// arr[14] = 15

// 이제 문제가 발생됩니다.

// 운영체제는 처음에 프로그래머한테 크기 10인 메모리 공간 요청 받았고 그에 맞게 연속된 메모리 공간을 찾아서 할당 했었습니다. 배열의 끝에는 다른 중요한 데이터가 있어서 더 확장할수도 없는 상황입니다.

// 그렇기 때문에 운영체제는 크기가 15인 연속된 공간의 메모리를 다시 찾아서 할당해야 합니다.

// 이뿐만이 아닙니다 . 기존에 저장되어있던 1~10까지 데이터를 전부 새로 할당하는 공간에 복사까지 해줘야합니다.

// 그럼 애초에 이런 일이 발생하지 않도록 배열의 크기를 arr[1000] 처럼 미리 넉넉하게 만들어 놓으면 어떨까요 ?  이렇게 하면 일시적으로는 해결되는 것 처럼 보입니다.

// 하지만 사용자가 1000보다 더 큰 배열을 원한다면 어떻게 될까요 ?

// 하지만 이렇게 처음부터 크게 공간을 할당해두면 배열 하나가 메모리를 엄청나게 차지할것이며 배열을 전부 사용하지도 않으면  이 부분은 순전히 낭비되는 공간입니다.

// 배열은 이처럼 데이터를 추가 , 제거 하려면 내부적으로 필요한 단계가 많이 들기 때문에 성능이 좋지 못합니다.

// 자바스크립트를 배워보신분이라면 이런 ㅈ질문이 생길수도 있습니다.

// ex)

// 자바스크립트 배열은 처음에 크기를 지정하지 않아요 !

// 자바스크립트는 push , pop 함수로 데이터 추가 , 제거가 가능한데요 ?

// 맞습니다. 자바스크립트는 지금까지 설명한 배열 동작과는 다르게 작동합니다.

// 자바스크립트에서 배열은 상황에 따라서 연속적, 불 연속적으로 메모리를 할당하지만, 대부분은 불연속적으로 할당합니다. 불연속적으로 할당된 메모리는 내부적으로 연결해서 사용자에게는 배열인 것 처럼 보입니다.

// 이런 이유로 전통적인 프로그래밍 언어의 배열과는 조금 다르지만 , 자료구조의 기능적인 자료구조의 기능적인 부분의 기능을 봤을때는 (사용자가 배열처럼 사용할수 있음) 동일하기 때문에 배열이라고 부를수 있습니다.

// 4:51초 참고 장단점 개념aa
