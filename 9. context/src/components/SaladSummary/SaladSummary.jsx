import React, { useContext } from 'react'

import { SaladContext } from '../SaladMaker/SaladMaker'


import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(
          {
                    wrapper: {
                              borderTop: "1px solid black",
                              display: "flex",
                              padding: 25
                    },

                    list: {
                              display: "flex",
                              flexDirection: "column",
                              flexWrap: "wrap",
                              maxHeight: 50,

                              "& li": {
                                        width: 100,
                                        listStyle: "none",
                                        marginLeft: 0,
                                        // padding: 10,
                              }
                    }
          }
)


const SaladSummary = () => {
          const classes = useStyles()

          const { salad } = useContext(SaladContext)


          return (
                    <div className={classes.wrapper}>
                              <h2> Your Salad: </h2>

                              <ul className={classes.list}>
                                        {
                                                  salad.map(({name, id}) => (
                                                            <li key ={id}> 
                                                                      {name} 
                                                            </li>
                                                  ))
                                        }                                        
                              </ul>
                    </div>
          )
}


export default SaladSummary
