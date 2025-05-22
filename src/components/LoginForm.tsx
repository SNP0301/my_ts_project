import React, { useState } from 'react'; // useState 훅만 쓸거 ㅇㅇ

interface loginFormProps{
  onLogin: (username: string, password: string) => void; // 부모 컴포넌트에서 로그인 처리하는 함수
}

function LoginForm({ onLogin }: loginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    onLogin(username, password); // 부모 컴포넌트로 username, password 전달
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm; // LoginForm 컴포넌트를 export 해주자