import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  let totalQuantity = 0;
  let total = 0;

  for (const product of props.cart) {
      if(!product.quantity){
          product.quantity =1;
      }
      else{
        total = total + product.price* product.quantity;
        totalQuantity = totalQuantity + product.quantity;
      }

  }

//   const totalQuantity = props.cart.reduce(
//     (totalQuantity, prd) =>
//       !prd.quantity ? (prd.quantity = 1) : totalQuantity + prd.quantity,
//     0
//   );


//   const total = props.cart.reduce(
//     (total, prd) =>
//       !prd.quantity ? (prd.quantity = 1) : total + prd.price * prd.quantity,
//     0
//   );
  let shipping = 0;
  if (total > 350 || total === 0) {
    shipping = 0;
  } else if (total > 0 && total < 350) {
    shipping = 4.99;
  }

  // console.log(total,shipping);
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Orders: {totalQuantity}</p>

      <p>
        <small>Shipping Cost: ${shipping}</small>
      </p>
      <p>Total Price: ${(total + shipping).toFixed(2)}</p>
      <br></br>
      <Link to="/Review">
        <button className="main-button"> Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
