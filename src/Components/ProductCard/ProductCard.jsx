import { useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";

import s from "./Style.module.scss";

export const ProductCard = ({ id, title, img, roast, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    console.log(`${title} added to cart`);
  };

  return (
    <figure className={s.ProductCard} key={title} onClick={handleClick}>
      <h2 className={s.title}>{title}</h2>

      <div
        style={{ backgroundImage: `url(${img})` }}
        className={s.img_container}
      ></div>

      <article>
        {/* <p>Roast:</p> */}
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
      <button className={s.CartButton} onClick={handleAddToCart}>
        Add to cart
      </button>
    </figure>
  );
};
