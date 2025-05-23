import React from 'react';

//User 정보(학번, pw, 계열사, name, nickname, boj_id, 권한 정도)
interface MyPageProps { // 얘가 줄 prop을 정의
  username: string;
  password: string;
  affiliation: string;
  name: string;
  nickname: string;
  boj_id: string;
}

const MyPage: React.FC<MyPageProps> = ({ // props를 받아서
  username,
  password,
  affiliation,
  name,
  nickname,
  boj_id,
}) => {
  return (
    <div>
      <h1>My Page</h1>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
      <p>Affiliation: {affiliation}</p>
      <p>Name: {name}</p>
      <p>Nickname: {nickname}</p>
      <p>BOJ ID: {boj_id}</p>
    </div>
  );
};

export default MyPage; // MyPage 컴포넌트를 export 해주자