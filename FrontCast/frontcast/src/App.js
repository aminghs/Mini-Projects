import React, { useState } from 'react'
import Product from './components/Product/Product'


const App = props => {

    const [productState, setProductState] = useState({
        products: [
                    { title: 'Book 1', price: 99},
                    { title: 'Book 2', price: 89},
                    { title: 'Book 3', price: 79},
                ],
    })

    const changePriceHandler = () => {
        setProductState({
            products: [
                                { title: 'Book 1', price: 59},
                                { title: 'Book 2', price: 69},
                                { title: 'Book 3', price: 29},
                            ],
        })
    }

    return (
                    <div id="main" className="container">
                        <h2>React App</h2>
                        <Product
                            title={productState.products[0].title} 
                            price={productState.products[0].price} 
                        />
                        <Product 
                            title={productState.products[1].title} 
                            price={productState.products[1].price} 
                        />
                        <Product 
                            title={productState.products[2].title} 
                            price={productState.products[2].price} 
                        />
                        <button onClick={changePriceHandler} >Change price</button>
                    </div>
                )
}


// class App extends React.Component {

//     state = {
//         
//     }

//     changePriceHandler = () => {
//         this.setState({
//             products: [
//                 { title: 'Book 1', price: 59},
//                 { title: 'Book 2', price: 69},
//                 { title: 'Book 3', price: 29},
//             ],  
//         })
//     }

//     render() {
//         
//     }
// }

  export default App;