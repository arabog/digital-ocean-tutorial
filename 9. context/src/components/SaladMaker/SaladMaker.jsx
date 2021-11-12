import React, { createContext, useReducer } from 'react'

import SaladBuilder from '../SaladBuilder/SaladBuilder'
import SaladSummary from '../SaladSummary/SaladSummary'


import { createUseStyles } from "react-jss"


const useStyles = createUseStyles(
          {
                    wrapper: {
                              textAlign: "center"
                    }
          }
)


export const SaladContext = createContext()


const reducer = (state, item) => {
          return [...state, item]
}


const SaladMaker = () => {
          const classes = useStyles()

          const [ salad, setSalad ] = useReducer(reducer, [])

          return (
                    <SaladContext.Provider value={{salad, setSalad}}>
                              <h1 className={classes.wrapper}>
                                        <span role="img" aria-label="salad"> 🥗 </span>

                                        Build Your Custom Salad!

                                        <span role="img" aria-label="salad"> 🥗 </span>
                              </h1>

                              <SaladBuilder />

                              <SaladSummary />
                    </SaladContext.Provider>
          )
}


export default SaladMaker


/* 

import React from 'react'
import SaladBuilder from '../SaladBuilder/SaladBuilder'
import SaladSummary from '../SaladSummary/SaladSummary'


import { createUseStyles } from "react-jss"


const useStyles = createUseStyles(
          {
                    wrapper: {
                              textAlign: "center"
                    }
          }
)


const SaladMaker = () => {
          const classes = useStyles()

          return (
                    <>
                              <h1 className={classes.wrapper}>
                                        <span role="img" aria-label="salad">🥗</span>

                                        Build Your Custom Salad!

                                        <span role="img" aria-label="salad">🥗</span>
                              </h1>

                              <SaladBuilder />

                              <SaladSummary />
                    </>
          )
}


export default SaladMaker


*/