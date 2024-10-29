import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../Context/Context";
import { ProductCard } from "../ProductCard/ProductCard";

import s from "./Style.module.scss";

export const ProductsContainer = () => {
  // Gemmer produkterne
  const [products, setProducts] = useState([]);
  console.log(products);

  // Henter dataen fra context provideren
  const { cartData } = useContext(CartContext);

  // console.log(cartData);

  // Henter produkterne
  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <section className={s.ProductsContainer}>
      {products?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.name}
            img={product.image}
            price={product.price}
          />
        );
      })}
    </section>
  );
};