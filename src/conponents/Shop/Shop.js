import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  // const first10=fakeData.slice(0,10);
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
    .then(res=>res.json())
    .then(data =>setproducts(data))
  }, []);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log("Adding", product);
  
    setCart([...cart, product]);
    // const sameProduct = newCart.filter((pd) => pd.key === product.key);
    // const count = sameProduct.length;
    // addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
            // console.log(product)
          <Product
            key={product.key}
            showAddToCard={true}
            handleAddProduct={handleAddProduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
