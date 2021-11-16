import React from 'react'

import Alert from '../Alert/Alert'

import { createUseStyles } from "react-jss"


const useStyles = createUseStyles(
          // {
          //           item: {
          //                     marginRight: 20,
          //           },

          //           wrapper: {
          //                     borderTop: "1px solid black",
          //                     display: "flex",
          //                     flexWrap: "wrap",

          //                     "& h2": {
          //                               width: "100%"
          //                     }
          //           }
                    
          // }

          {
                    item: {},

                    wrapper: {
                              borderTop: "1px solid black",
                              display: "flex",
                              flexWrap: "wrap",

                              "& h2": {
                                        width: "100%"
                              },

                              "& $item": {
                                        marginRight: 20
                              }
                    }
          }
)


const CartSuccess = () => {

          // Style Obje
          // const styles = {
          //           header: {
          //                     width: '100%'
          //           },

          //           item: {
          //                     marginRight: 20
          //           },

          //           wrapper: {
          //                     borderTop: "1px solid black",
          //                     display: "flex",
          //                     flexWrap: "wrap",
          //           }
          // }

          const classes = useStyles()

          return (
                    <div>
                              <Alert 
                                        title="Added to Cart"
                                        type="success"
                              />

                              <div className={classes.wrapper}>

                                        <h2> You have added 3 items: </h2>

                                        <div className={classes.item}>
                                                  <div>Bananas</div>
                                                  <div>Quantity: 2</div>
                                        </div>

                                        <div className={classes.item}>
                                                  <div>Lettuce</div>
                                                  <div>Quantity: 1</div>
                                        </div>
                              </div>
                    </div>
          )
}


export default CartSuccess
