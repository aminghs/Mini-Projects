import React from 'react'
import Product from './components/Product/Product'
import './App.css'

class App extends React.Component {

    state = {
        products: [
            { title: 'Book 1', price: 99},
            { title: 'Book 2', price: 89},
            { title: 'Book 3', price: 79},
        ],
    }

    changeTitleHandler = (event) => {
        this.setState({
            products: [
                { title: 'Book 1', price: 59},
                { title: event.target.value, price: 69},
                { title: 'Book 3', price: 29},
            ],  
        })
    }

    changePriceHandler = (newTitle) => {
        this.setState({
            products: [
                { title: newTitle, price: 59},
                { title: 'Book 2', price: 69},
                { title: 'Book 3', price: 29},
            ],  
        })
    }

    render() {

        const btn = {
            backgroundColor: '#7b1fa2',
            color: '#ffffff',
            font: 'inherit',
            border: 'none',
            outline: 'none',
            borderRadius: '3px',
            padding: '0.6rem',
            margin: '0.6rem auto',
        }

        return (
            <div className="center">
                <h2>Book store</h2>
                <Product
                    title={this.state.products[0].title} 
                    price={this.state.products[0].price} 
                />
                <Product 
                    title={this.state.products[1].title} 
                    price={this.state.products[1].price}
                    change={this.changeTitleHandler} 
                />
                <Product 
                    title={this.state.products[2].title} 
                    price={this.state.products[2].price} 
                    click={() => {this.changePriceHandler('New Title')}}
                />
                <button style={btn} onClick={this.changePriceHandler} >Change price</button>
            </div>
        )
    }
}

  export default App;