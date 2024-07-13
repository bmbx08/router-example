import { useState } from 'react';
import './App.css';
import {Routes,Route,Navigate} from "react-router-dom"
//useNavigate는 리액트 훅 함수, Navigate는 컴포넌트(리다이렉트를 도움)
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';


function App() {
  const [authenticate,setAuthenticate]=useState(true);//true 하면 user로 이동, false하면 login으로 리다이렉트됨.
  const PrivateRoute = () =>{ //함수가 아니라 컴포넌트임
    return authenticate == true?<UserPage/>:<Navigate to="/login"/>
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/products/:id/:num" element={<ProductDetailPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<PrivateRoute/>}/> {/* UserPage는 보호된 사이트이기 때문에 PrivateRoute컴포넌트를 먼저 불러줌 */}
      </Routes>
      {/* 
      HTTP 명령어
      Get: 데이터를 가져올 때
      Post: 새로운 게시물을 생성할때 사용
      Put: 기존 데이터를 수정할 때 사용
      Delete: 데이터 삭제
      */}
      
    </div>
  );
}

export default App;
