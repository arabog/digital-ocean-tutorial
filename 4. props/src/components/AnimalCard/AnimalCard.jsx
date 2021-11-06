import React from 'react'
import "./AnimalCard.css"


const AnimalCard = ( { additional, showAdditional, diet, name, scientificName, size } ) => {


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
