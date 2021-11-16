import React from 'react'

import Alert from '../Alert/Alert'


const CartSuccess = () => {
          /*
          .cart-success-wrapper {
          border-top: 1px solid #000;

          display: flex;

          flex-wrap: wrap;
}

.cart-success-wrapper h2 {
          width: 100%;
}

.item {
          margin-right: 20px;
}
          */ 
          const styles = {
                    header: {
                              width: '100%'
                    },

                    item: {
                              marginRight: 20
                    },

                    wrapper: {
                              borderTop: "1px solid black",
                              display: "flex",
                              flexWrap: "wrap",
                    }
          }


          return (
                    <div>
                              <Alert 
                                        title="Added to Cart"
                                        type="success"
                              />

                              <div style={styles.wrapper}>

                                        <h2 style={styles.header}> You have added 3 items: </h2>

                                        <div style={styles.item}>
                                                  <div>Bananas</div>
                                                  <div>Quantity: 2</div>
                                        </div>

                                        <div style={styles.item}>
                                                  <div>Lettuce</div>
                                                  <div>Quantity: 1</div>
                                        </div>
                              </div>
                    </div>
          )
}


export default CartSuccess
