import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  let [{ basket }, dispatch] = useStateValue();
  //   const [value, setValue] = useState(0);
  let value = 0;
  basket.forEach((item) => {
      value+=item.price;
  });
  return (
    <div className="subtotal">
      <p className="allPruduct">All products: {basket.length}</p>
      <p className="allProductPrice">All Products of price: ${value}</p>
    </div>
  );
};

export default Subtotal;
