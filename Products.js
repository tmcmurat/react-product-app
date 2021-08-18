import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../productsData';  


const Products = () => {
    const products = productsData.map(product => {
        return (


            <div class="col-md-4 my-3" key={product.id}>
                <div class="card" style={{}}>
                    <img src={product.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title">{product.title}</h2>
                        <p class="card-text">{product.description}</p> 
                        <Link to={`/products/${product.id}`} params={{ productId: product.title }} className="viewDetail">View Detail </Link>
                    </div>
                </div>
            </div>


        );
    });

    return (
        <>
            <h1>Products Page</h1>
            {products}
        </>
    );
};

export default Products;
 