import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div>
    <Login />
      <MyPage
        username="testuser"
        password="password123"
        affiliation="testaffiliation"
        name="Test User"
        nickname="testnick"
        boj_id="testboj"/>
    </div>
  );
}

export default App;
