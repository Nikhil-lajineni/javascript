import React from "react";
import Products from "../../Components/axios/Products";

function Mens() {
  return (
    <div>
      <Products
        title={"Mens Clothing"}
        url={"https://fakestoreapi.com/products/category/men's clothing"}
      />
    </div>
  );
}

export default Mens;