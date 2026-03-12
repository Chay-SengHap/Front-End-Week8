import React from "react";
import { use } from "react";
import { useState } from "react";

export default function OrderCard({name , price , qty , checkout}) {
  const [quantity , setQuantity] = useState(qty)

  function minusClick(e){
    e.preventDefault()

    if(quantity != 0) {
      
      setQuantity(quantity-1)
      checkout( -price)
    }

  }

  function addClick(e){
    e.preventDefault()
    setQuantity(e=> e+1)
    checkout( +price)
  }

  


  return (
    <div className="order">
      <div>
        <h4>{name}</h4>
        <small>${price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={minusClick} >-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={addClick}>+</div>
      </div>
    </div>
  );
}
