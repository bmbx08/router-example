import React from "react";
import {useParams} from "react-router";

const ProductDetailPage = () => {
  const {id, num} = useParams();
  console.log("ppp", id,num);

  return (
    <div>
      <h1>Show Product Detail{id}{num}</h1>
    </div>
  );
};

export default ProductDetailPage;
