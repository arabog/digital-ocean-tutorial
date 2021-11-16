import React from 'react'
import PropTypes from "prop-types"

import AnimalDetails from '../AnimalDetails/AnimalDetails'
import Card from "../Card/Card"


const AnimalCard = ( { name, size, ...props  } ) => {


          return (
                    <Card 
                              title="Animal" 
                              // details={<em> Mammal</em>}

                              details ={
                                        <AnimalDetails 
                                                  {...props}
                                        />                    
                              }
                                        
                    >
                              <h3> {name} </h3>

                              <div>{size}kg</div>

                              {/* <AnimalDetails 
                                        {...props}
                              />                     */}
                    </Card>

          )
}


export default AnimalCard


AnimalCard.propTypes = {

          name: PropTypes.string.isRequired,

          size: PropTypes.number.isRequired,

}





/*
You can use oneOfType anywhere, so if you wanted
size to be either a number or a string you could change it to this:

size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
*/ 