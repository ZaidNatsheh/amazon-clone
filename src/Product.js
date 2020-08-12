/* eslint-disable no-unused-vars */
import React from "react";
import "./Product.css";
import { useStateValue } from "./data/StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              // eslint-disable-next-line jsx-a11y/accessible-emoji
              <p>&#x2B50;</p>
            ))}
        </div>
      </div>

      <img src={image} alt="s" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
