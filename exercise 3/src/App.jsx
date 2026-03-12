import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";
import { use } from "react";
import { useState } from "react";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];
const defaultTotal = ORDERS.reduce((a, b) => a + (b.price * b.quantity) , 0)

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  const [totalPrice , setTotalPrice] = useState(defaultTotal);
  
  function calculatePrice(newPrice){
    setTotalPrice(prevTotal => prevTotal + newPrice)
  }
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map(element => <OrderCard name={element.product} price={element.price} qty={element.quantity} checkout={calculatePrice}></OrderCard>)}
      </div>

      <CheckoutButton total={totalPrice.toFixed(2)}></CheckoutButton>
    </>
  );
}
