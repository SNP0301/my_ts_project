1. namedExport, defaultExport
- export 할 때 default로 뭘 뱉을지 정할 수 있는데
  - 그 default를 받아가는거면 from 이하의 라이브러리의 default 코드를 import **defaultExport**
  - default가 아닌 다른 것을 가져가는거면 그 라이브러리의 어떤 코드를 가져올 지 `{}`에 넣어서 표시: **namedExport**

2. Why Redux?
- component 단위로 만들어서 재사용할건데, component 간 공유하는 상태가 많아지면 데이터 불일치 등은 누가 책임지나? => **한 곳에 모아서 관리하자!**
  - Store: 앱 전역 **상태를 저장**하는 공간 (한 곳에서 모든 상태를 관리)
  - Action: 상태를 **어떻게 바꿀지** 설명하는 객체 (ex. { type: 'LOGIN', payload: userInfo })
  - Reducer: 이전 상태와 액션을 받아서 **새로운 상태를 반환**하는 함수
  - Dispatch: 액션을 store에 보내 상태 **변경 요청**하는 함수

- Redux 3대 원칙
  - single source of truth
  - state is read-only
  - mutations are written as pure functions