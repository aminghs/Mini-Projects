import React from 'react'
import './Product.css'

export const Product = (props) => {   
    return (
        <div className="product">
            <p>Product Name: {props.title}</p>
            <p>Product Price: {props.price}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Product