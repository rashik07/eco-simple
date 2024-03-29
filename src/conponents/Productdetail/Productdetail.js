import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Productdetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd=>pd.key === productKey);
   
    return (
        <div>
            <h1>Your product details</h1>
            <Product showAddToCard={false} product={product}></Product>
        </div>
    );
};

export default Productdetail;