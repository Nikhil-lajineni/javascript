
import { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import getProductsData from "../services/ProductService";
function Products({ title, url }) {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getProductsData(setProducts);
  },[]);

  return (
    <div className="productsContainer">
      <h2> {title} Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
        ratione excepturi, facere consequuntur fugiat sapiente laboriosam dicta
        impedit cupiditate ut hic quia deserunt et nulla enim est adipisci ex
        eaque quibusdam temporibus aperiam illum. Facilis quo deserunt,
        cupiditate, velit nulla eius impedit laborum delectus veritatis quaerat
        consequatur, maiores nam est ratione ipsa eum. Architecto labore
        obcaecati, officia reprehenderit id fugit rerum suscipit distinctio illo
        repellendus ipsam commodi, est aperiam sapiente ullam, soluta error
        porro sint quibusdam deleniti veniam voluptatibus dolor earum? Vitae
        molestias, nostrum assumenda doloribus delectus reprehenderit
        necessitatibus corporis reiciendis ad. Dicta, quam! Porro iusto nisi
        ratione ullam.
      </p>
      <div className="allProductsContainer">
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;