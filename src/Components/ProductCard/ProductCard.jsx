import { CgShoppingCart } from "react-icons/cg";

import s from "./Style.module.scss";

export const ProductCard = ({ title, img, price }) => {
  return (
    <figure className={s.ProductCard} key={title}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={s.img_container}
      ></div>
      <article>
        <h4 className={s.title}>{title}</h4>
        <p className={s.price}>{price} DKK</p>
      </article>
      <button className={s.CartButton}>
        <CgShoppingCart />
      </button>
    </figure>
  );
};
