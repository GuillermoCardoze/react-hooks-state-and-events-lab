import React, {useState} from "react";


function Item({ name, category }) {

  const [ isCart, isCartSetter ] = useState(true)
  function cartHandler (){
    isCartSetter(!isCart)

  }
  const buttContext = isCart ? "Add to Cart" : "Remove From Cart"
  const cartClass = isCart ? "" : "in-cart"
 
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartHandler}className="add">{buttContext}</button>
    </li>
  );
}

export default Item;
