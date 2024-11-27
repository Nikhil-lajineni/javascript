import React from "react";
import Products from "../../Components/axios/Products";
function Jewelery() {
  return (
    <div>
      <Products
        title={"Jewelery"}
        url={"https://fakestoreapi.com/products/category/jewelery"}
      />
    </div>
  );
}

export default Jewelery;