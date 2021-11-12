import React, { useContext, useReducer } from 'react'
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

import UserContext from '../User/User';
import { SaladContext } from '../SaladMaker/SaladMaker';


const useStyles = createUseStyles(
          {
                    add: {
                              background: "none",
                              border: "none",
                              cursor: "pointer"
                    },

                    favorite: {
                              position: "absolute",

                              fontSize: 20,
                              top: 10,
                              right: 10
                    },

                    image: {
                              fontSize: 80
                    },

                    wrapper: {
                              position: "relative",

                              border: "1px solid lightgrey",
                              margin: 20,
                              padding: 25,
                              textAlign: "center",
                              textTransform: "capitalize",
                              width: 200,
                    }
          }
)


const reducer = key => key + 1


// serves as d card 4 each individual ingredient
const SaladItem = ( {image, name } ) => {
          const classes = useStyles();
          // const favorite = true;

          const {  setSalad } = useContext(SaladContext) 
          
          const user = useContext(UserContext)
          const favorite = user.favorites.includes(name)

          const [id, updateId] = useReducer(reducer, 0)

          const update = () => {
                    /* 
                              ds is updating d salad var indirectly. 
                              if u notice, setSalad is not used in d render sectn
                    */
                    // a reducer fxn 4rm saladMaker         
                    setSalad(
                              {
                                        name,

                                        id: `${name} - ${id}`
                              }
                    )

                    // a new reducer fxn in saladItem         
                    updateId()
          }
 

          return (
                    <div className={classes.wrapper}>
                              <h3> { name } </h3>

                              <span 
                                        className={classes.favorite}
                                        aria-label={favorite ? "Favorite" : "Not Favorite"}
                              >
                                        {favorite ? '😋' : ""}
                              </span>

                              <button className={classes.add} onClick={update}>
                                        <span 
                                                  className={classes.image} 
                                                  role="img" 
                                                  aria-label={name}
                                        >
                                                  {image}
                                        </span>
                              </button>
                    </div>
          )
}


export default SaladItem


SaladItem.propTypes = {
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
}
