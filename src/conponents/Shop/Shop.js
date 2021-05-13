import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products, setproducts]=useState(first10);
    const [cart,setCart] = useState([]);
    
    const handleAddProduct =(product) =>{

        console.log('Adding',product);
        const newCart =[...cart,product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                
                    {
                        products.map(product=><Product handleAddProduct={handleAddProduct} product={product}></Product>)
                    }
                
            </div>
            <div className="cart-container">
                this is cart
                <h6>Order Summary:{cart.length}</h6>
            </div>
            
        </div>
    );
};

export default Shop;