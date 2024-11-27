import axios from "axios";
 const getProductsData = (setProducts) => {
  //axios.get() will return promise and to handle that promise
  //we have used then and catch, for more info go through promise video
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    })
    .catch(() => {
      alert("Something went wrong");
    });
};
export default getProductsData;