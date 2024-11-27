import React from "react";
import Products from "../../Components/axios/Products";
function Electronics() {
  return (
    <div>
      <Products
        title={"Electronics"}
        url={"https://fakestoreapi.com/products/category/electronics"}
      />
    </div>
  );
}

export default Electronics;