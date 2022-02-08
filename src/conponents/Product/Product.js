import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
const Product = (props) => {

  return (
    <div className="product">
      <div>
        <img src={props.product.img} />
      </div>
      <div className="product-contain">
        <h4 className="product-name"><Link to={"/product/"+ props.product.key}>{props.product.name}</Link></h4>
        <br />
        <p>
          <small>by: {props.product.seller}</small>
        </p>
        <p>${props.product.price}</p>
        <p>
          <small>Only left in stock: {props.product.stock} - order soon</small>
        </p>
        <br />
        { props.showAddToCard &&
        <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>}
      </div>
    </div>
  );
};

export default Product;
