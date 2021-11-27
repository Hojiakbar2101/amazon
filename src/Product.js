import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, rating, image, price, title }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: 'ADD_TO_BASKET', 
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  };
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(Math.round(rating))
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Backet</button>
    </div>
  );
};

export default Product;
