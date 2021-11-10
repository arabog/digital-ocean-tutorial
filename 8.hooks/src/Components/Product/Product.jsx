import React, { useReducer } from 'react'
import "./Product.css"

import cartReducer from '../Reducer/Reducer'

const currencyOptions = {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
}


const getTotal = (cart) => {
          const total = cart.reduce((total, item) => total + item.price, 0)

          return total.toLocaleString(undefined, currencyOptions)
}


const products = [
          {
                    emoji: '🍦',

                    name: 'ice cream',

                    price: 5
          },

          {
                    emoji: '🍩',

                    name: 'donuts',

                    price: 2.5
          },

          {
                    emoji: '🍉',

                    name: 'watermelon',

                    price: 4
          },
]





const Product = () => {
          // reducer
          const [cart, setCart] = useReducer(cartReducer, [])

          // fxn
          const add = (product) => {
                    // destructuring
                    setCart({product, type: "add"})
          }

          function remove(product) {
                    // destructuring
                    setCart({product, type: "remove"})
          }

          return (
                    <div className="wrapper">
                              {/* cart: items & total price */}
                              <div className="cart">
                                        Shopping Cart: {cart.length} total items
                              </div>

                              <div> Total: ${getTotal(cart)} </div>



                              {/* product: buttons-add, remove */}
                              <div>
                                        {
                                                  products.map((product) => (
                                                            <div key={product.name}>
                                                                      <div className="product">
                                                                                <span role="img" aria-label={product.name}> 
                                                                                          { product.emoji} 
                                                                                </span>
                                                                      </div>

                                                                      {/* on clicking dse btn per4m ds event handler: onClick */}
                                                                      <button 
                                                                                onClick ={() => add(product)}
                                                                      >
                                                                                Add
                                                                      </button>

                                                                      <button onClick = {() => remove(product)}>
                                                                                Remove
                                                                      </button>
                                                            </div>
                                                  ))
                                        }


                              </div>

                    </div>
          )
}


export default Product


/*
import React, { useReducer } from 'react'
import "./Product.css"

const currencyOptions = {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
}

const getTotal = (total) => {
          return total.toLocaleString(undefined, currencyOptions)
}

const products = [
          {
                    emoji: '🍦',

                    name: 'ice cream',

                    price: 5
          },

          {
                    emoji: '🍩',

                    name: 'donuts',

                    price: 2.5
          },

          {
                    emoji: '🍉',

                    name: 'watermelon',

                    price: 4
          },
]

function cartReducer(state, action) {
          switch(action.type) {
                    case 'add':
                              return [...state, action.name];

                    case 'remove':
                              const update = [...state];

                              update.splice(update.indexOf(action.name), 1);

                              return update;

                    default:
                              return state;
          }
}

const totalReducer = (state, action) => {
          if(action.type === "add") {
                    return state + action.price
          }

          return state - action.price
}


const Product = () => {

          // reducer
          const [cart, setCart] = useReducer(cartReducer, [])
          const [ total, setTotal ] =  useReducer(totalReducer, 0)

          // fxn
          const add = (product) => {
                    // destructuring an obj
                    const {name, price} = product;

                    setCart({name, type: "add"})

                    setTotal({ price, type: "add"})
          }

          function remove(product) {
                    // destructuring an obj
                    const {name, price } = product

                    setCart({name, type: "remove"})

                    setTotal({price, type: "remove"})
          }

          return (
                    <div className="wrapper">
                              cart: items & total price 
                              <div className="cart">
                                        Shopping Cart: {cart.length} total items
                              </div>

                              <div> Total: ${getTotal(total)} </div>



                              product: buttons-add, remove
                              <div>
                                        {
                                                  products.map((product) => (
                                                            <div key={product.name}>
                                                                      <div className="product">
                                                                                <span role="img" aria-label={product.name}> 
                                                                                          { product.emoji} 
                                                                                </span>
                                                                      </div>

                                                                      on clicking dse btn per4m ds event handler: onClick
                                                                      <button 
                                                                                onClick ={() => add(product)}
                                                                      >
                                                                                Add
                                                                      </button>

                                                                      <button onClick = {() => remove(product)}>
                                                                                Remove
                                                                      </button>
                                                            </div>
                                                  ))
                                        }


                              </div>

                    </div>
          )
}

export default Product

*/ 
