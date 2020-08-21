import React from 'react'

import ProductList from './components/ProductList/ProductList'
import Main from './components/Main/Main'
import Wrapper from './hoc/Wrapper'
import Container from './hoc/Container'
import AuthContext from './context/auth-context'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('App.js constructor')
  }

  state = {
    products: [
      { id: 1, title: 'Book 1', price: 99 },
      { id: 2, title: 'Book 2', price: 89 },
      { id: 3, title: 'Book 3', price: 79 },
    ],
    showProducts: false,
    showMain: true,
    auth: false,
  }

  componentDidMount() {
    console.log('App.js componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate')
  }

  changeTitleHandler = (event, id) => {
    const productIndex = this.state.products.findIndex((item) => {
      return item.id === id
    })

    const product = {
      ...this.state.products[productIndex],
    }

    product.title = event.target.value

    const products = [...this.state.products]
    products[productIndex] = product

    this.setState({ products: products })
  }

  toggleProductHandler = () => {
    const show = this.state.showProducts
    this.setState({ showProducts: !show })
  }

  deleteProductHandler = (productIndex) => {
    const products = [...this.state.products]
    products.splice(productIndex, 1)
    this.setState({ products: products })
  }

  loginHandler = () => {
    this.setState({ auth: true })
  }

  render() {
    console.log('App.js render')
    let products = null

    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            products={this.state.products}
            click={this.deleteProductHandler}
            change={this.changeTitleHandler}
            isAuth={this.state.auth}
          />
        </div>
      )
    }

    return (
      <Container>
        <button
          onClick={() => {
            this.setState({ showMain: false })
          }}
        >
          Remove Main
        </button>
        <AuthContext.Provider
          value={{ auth: this.state.auth, login: this.loginHandler }}
        >
          {this.state.showMain ? (
            <Main
              products={this.state.products}
              click={this.toggleProductHandler}
            />
          ) : null}
          {products}
        </AuthContext.Provider>
      </Container>
    )
  }
}

export default Wrapper(App, 'center')
