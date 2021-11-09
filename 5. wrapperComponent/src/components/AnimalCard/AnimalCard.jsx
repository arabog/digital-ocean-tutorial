import React from 'react'
import PropTypes from "prop-types"

import "./AnimalCard.css"

import AnimalDetails from '../AnimalDetails/AnimalDetails'


const AnimalCard = ( { name, size, ...props  } ) => {


          return (
                    <div className= "animal-wrapper">
                              <h2> {name} </h2>

                              <h4>{size}kg</h4>

                              <AnimalDetails 
                                        {...props}
                              />

                              {/* <button 
                                        onClick = {() => showAdditional(additional)}
                              >
                                        More Info
                              </button> */}
                    
                    </div>

          )
}


export default AnimalCard


AnimalCard.propTypes = {

          name: PropTypes.string.isRequired,

          size: PropTypes.number.isRequired,

}


AnimalCard.defaultProps = {
          additional: {
                    notes: 'No Additional Information'
          }
}


/*
You can use oneOfType anywhere, so if you wanted
size to be either a number or a string you could change it to this:

size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
*/ 