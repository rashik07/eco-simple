import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const total=props.cart.reduce((total, prd) => total+prd.price,0);
    let shipping =0;
    if(total>35){
        shipping=0;

    }
    else if(total < 35){
        shipping=4.99;
    }
    else if(total == 0){
        shipping=0;
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Orders: {props.cart.length}</p>
            
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total Price: {total+ shipping}</p>
            <br></br>
            <Link to="/Review">
                <button className="main-button"> Review Order</button>
            </Link>
            
        </div>
    );
};

export default Cart;