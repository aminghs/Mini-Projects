import React from 'react'
import './Product.css'

export const Product = (props) => {   
    return (
        <div className="product">
            <p onClick={props.click}>Product Name: {props.title}</p>
            <p>Product Price: {props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} />
        </div>
    )
}

export default Product