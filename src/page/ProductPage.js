import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
  let [query,setQuery]=useSearchParams();
  console.log("query data inside page",query.get("page")); //page 쿼리 값을 가져온다

  return (
    <div>
      <h1>Show All Products!!</h1>
    </div>
  )
}

export default ProductPage