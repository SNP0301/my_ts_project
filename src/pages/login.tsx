import React from 'react'; // 리액트 기능 사용하기 위해서 React import 해오고
import LoginForm from '../components/LoginForm'; // LoginForm 컴포넌트를 불러오자 -> 입력창, 버튼 등의 UI가 여기 들어있음

const Login: React.FC = () => { // FC: Functional Component, TS에서 함수형 컴포넌트 부를꺼라 이렇게 정의
  return ( // 
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default Login; // Login 컴포넌트를 export 해주자