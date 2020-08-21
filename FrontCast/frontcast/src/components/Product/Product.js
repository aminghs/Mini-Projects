import React, { Component } from 'react'

import Wrapper from '../../hoc/Wrapper'
import AuthContext from '../../context/auth-context'

import './Product.css'

class Product extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  static contextType = AuthContext

  componentDidMount() {
    this.inputRef.current.focus()
  }

  render() {
    console.log('Product')
    return (
      <React.Fragment>
        {this.context.auth ? <p>Logged in!</p> : <p>Please Login!</p>}

        <p key="1" onClick={this.props.click}>
          Product Name: {this.props.title}
        </p>
        <p key="2">Product Price: {this.props.price}</p>
        <p key="3">{this.props.children}</p>
        <input
          ref={this.inputRef}
          key="4"
          type="text"
          onChange={this.props.change}
          value={this.props.title}
        />
      </React.Fragment>
    )
  }
}

export default Wrapper(Product, 'product')
