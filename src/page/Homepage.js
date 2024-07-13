import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//바로 태그를 넣을려면 Link, 함수 안에 넣을거면 useNavigate 사용

const Homepage = () => {
  const navigate = useNavigate();

  const goProductPage=()=>{
    navigate('/products?page=3'); //url 뒤에 쿼리를 여러개 붙여도 같은 사이트로 가지만 파라미터를 여러개 붙이면 오류남.
  }
  
  return (
    <div>
        <h1>Homepage</h1>
        <Link to="/about">Go to about page</Link>
        <button onClick={goProductPage}>go to product page</button>
    </div>
  )
}

export default Homepage
