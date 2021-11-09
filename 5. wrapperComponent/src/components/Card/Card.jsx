import "./Card.css"

import React from "react"

import PropTypes from "prop-types"


const Card = ( { children, details, title  } ) => {


          return (
                    <div className= "card">
                              <div className="card-details">
                                        <h2> { title }</h2>

                                        {details}
                              </div>

                              { children }
                    </div>

          )
}


export default Card


Card.propTypes = {

          children: PropTypes.oneOfType([
                    PropTypes.arrayOf(PropTypes.element),
                    PropTypes.element.isRequired
          ]),

          details: PropTypes.element,

          title: PropTypes.string.isRequired,
}

Card.defaultProps = {
          details: null,
}