import React from "react";
import "./Product.css";
const Product = (props) => {
  return (
    <div className="product">
      <div>
        <img src={props.product.img} />
      </div>
      <div>
        <h4 className="product-name">{props.product.name}</h4>
        <br />
        <p>
          <small>by:{props.product.seller}</small>
        </p>
        <p>${props.product.price}</p>
        <p>
          <small>Only left in stock:{props.product.stock}</small>
        </p>
        <br />
      </div>
    </div>
  );
};

export default Product;
