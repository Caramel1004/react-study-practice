## 🌈 React 환경 설치
> 공식 사이트: [https://reactjs-kr.firebaseapp.com/docs/installation.html](https://reactjs-kr.firebaseapp.com/docs/installation.html)
### 1. react 라이브러리 설치
  - npm 버전 5.2.0 아래
```
npm install -g create-react-app
```
- npm 버전 5.2.0+ 는 npm 대신 npx 사용 가능
```
npx create-react-app
```

  - react project 생성 -> 원하는 이름으로 생성하면 됩니다.
```
create-react-app <프로젝트 명>
```

## React 개념
### Props란?
프롭스의 정의
- 만약 A,B,C 페이지에서, 각 페이지마다 'Header안에 들어있는 텍스트를 다르게' 보여주고 싶다면?
- 프롭스는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 값 입니다. 즉, props를 활용하면, 부모 컴포넌트 -> 자식 컴포넌트 로 값을 전달할 수 있습니다.
- props는 객체입니다. 뭔가를 넘겨받을때, 자식 컴포넌트에서는 'props.이름' 으로 접근할 수 있습니다.

프롭스의 특징
- 자식 컴포넌트에서 props는 읽기 전용 입니다. 함수 컴포넌트, 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정할 수 없습니다.
- 부모 컴포넌트의 props를 변경하면, 해당 props를 사용하고 있던 자식 컴포넌트는 리렌더링 됩니다.
<img src="./react props.png" style="width: 100%; height: 500px;">
