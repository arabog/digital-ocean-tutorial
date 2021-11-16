import React from 'react'
import PropTypes from "prop-types"

import "./AnimalCard.css"


const AnimalCard = ( { additional, showAdditional, diet, name, scientificName, size  } ) => {


          return (
                    <div className= "animal-wrapper">
                              <h2> {name} </h2>

                              <h3>{scientificName}</h3>

                              <h4>{size}kg</h4>

                              <div>{ diet.join(', ') }</div>

                              <button 
                                        onClick = {() => showAdditional(additional)}
                              >
                                        More Info
                              </button>
                    
                    </div>

          )
}


export default AnimalCard


AnimalCard.propTypes = {

          additional: PropTypes.shape({
                    link: PropTypes.string,
                    notes: PropTypes.string
          }),

          diet: PropTypes.arrayOf(PropTypes.string).isRequired,

          name: PropTypes.string.isRequired,

          scientificName: PropTypes.string.isRequired,

          showAdditional: PropTypes.func.isRequired,

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