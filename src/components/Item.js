import React, { useState } from "react";

function Item({ name, category }) {
  const [ cart, setCart ] = useState("")
  
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart ? "remove" : "add"} onClick={() => cart ? setCart("") : setCart("in-cart")}>{cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
