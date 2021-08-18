import React from "react"
import {useParams} from "react-router-dom"
import productsData from '../productsData';

function ProductDetails() {
    let {productId} = useParams() 
    let thisProduct= productsData.find(p=>p.id == productId)   
    
    return (
        <div>
            <h1>Product Detail</h1>
            <img src={thisProduct.image}/>
             <h1>{thisProduct.title}</h1>
             <p>{thisProduct.description}</p> 
        </div>
    )
}
 

export default ProductDetails

 
