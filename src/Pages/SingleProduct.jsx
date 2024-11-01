import { useContext, useEffect, useState } from "react";

import { CartContext } from "../Context/Context";
// import { ProductCard } from "../Components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";

import s from "./Style.module.scss";

export const SingleProduct = () => {
  // Gemmer produkterne
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // Henter dataen fra context provideren
  const { cartData } = useContext(CartContext);

  // console.log(cartData);

  // Henter produkterne
  useEffect(() => {
    fetch(`http://localhost:8081/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  console.log(product);

  return (
    <main>
      {product ? (
        <>
          <div
            style={{ backgroundImage: `url(${product.image})` }}
            className={s.img_container}
          >
            <section>
              <h2>{product.name}</h2>
              <article>
                <p>
                  {product.description}
                </p>
              </article>
            </section>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};
