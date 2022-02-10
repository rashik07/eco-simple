import React, { useEffect, useState } from "react";

import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  // const first10=fakeData.slice(0,10);
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setDisplayProducts(data);
      });
  }, []);

  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    if (products.length) {
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        // console.log(key, addedProduct);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddProduct = (product) => {
    // console.log("Adding", product);

    setCart([...cart, product]);
    // const sameProduct = cart.filter((pd) => pd.key === product.key);
    // const count = sameProduct.length;

    //save to localStorage
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchProducts);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Products "
          onChange={handleSearch}
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
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
    </>
  );
};

export default Shop;
