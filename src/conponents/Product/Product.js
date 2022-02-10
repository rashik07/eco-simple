import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const Product = (props) => {
  console.log(props.product)
  return (
    <div className="product">
      <div>
        <img src={props.product.img} />
      </div>
      <div className="product-contain">
        <h4 className="product-name">
          <Link to={"/product/" + props.product.key}>{props.product.name}</Link>
        </h4>
        <br />
        <p>
          <small>by: {props.product.seller}</small>
        </p>
        <p>${props.product.price.toFixed(2)}</p>
        <p>
          <small>Only left in stock: {props.product.stock} - order soon</small>
        </p>
        <Rating
         emptySymbol="far fa-star icon-color"
         fullSymbol="fas fa-star icon-color"
         initialRating={props.product.star}
         readonly
       
        ></Rating>
        <br />
        {props.showAddToCard && (
          <button
            className="main-button"
            onClick={() => props.handleAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to Card
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
