import { CgShoppingCart } from "react-icons/cg";

import s from "./Style.module.scss";

export const ProductCard = ({ title, img, roast, price }) => {
  return (
    <figure className={s.ProductCard} key={title}>
      <h2 className={s.title}>{title}</h2>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={s.img_container}
      ></div>
      <article>
        <div className={s.dotsContainer}>
          {[1, 2, 3, 4, 5].map((value) => {
            return (
              <span
                key={value}
                className={`${s.roast} ${
                  roast >= value ? s.dotFilled : s.dotEmpty
                }`}
              ></span>
            );
          })}
        </div>
        <p className={s.price}>{price} DKK</p>
      </article>
      <button className={s.CartButton}>
        <CgShoppingCart />
      </button>
    </figure>
  );
};
