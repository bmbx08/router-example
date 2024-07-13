import React from 'react'
import { useNavigate } from 'react-router'
//바로 태그를 넣을려면 Link, 함수 안에 넣을거면 useNavigate 사용

const Aboutpage = () => {

    const navigate = useNavigate();

    const goToHomepage=()=>{
        navigate('/');
    };

  return (
    <div>
      <h1>About page!</h1>
      <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  )
}

export default Aboutpage