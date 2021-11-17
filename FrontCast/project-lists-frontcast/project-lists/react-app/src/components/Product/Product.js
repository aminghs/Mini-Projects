import React from 'react'

import './Product.css'

const Product = (props) => {
  return (
    <div className="product">
      <p onClick={props.click}>Product Name: {props.title}</p>
      <p>Product Price: {props.price}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.title} />
    </div>
  )
}

export default Product
