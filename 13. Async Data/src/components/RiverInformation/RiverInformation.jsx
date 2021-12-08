import React, { useState, useEffect } from 'react'

import { getRiverInformation } from "../../components/services/rivers"

import PropTypes from 'prop-types';


const RiverInformation = ( { name } ) => {
          // const [riverInfo, setRiverInfo] = useState({})

          const [riverInfo, setRiverInfo] = useState()


          useEffect(() => {
                    getRiverInformation(name)
                              .then(data => {
                                        setRiverInfo(data)
                              })
          }, [name])


          return (
                    <div>
                              <h2> River Information</h2>

                              {/* <ul>
                                        <li> Continent: {riverInfo.continent} </li>
                                        <li> Length: {riverInfo.length} </li>
                                        <li> Outflow: {riverInfo.outflow} </li>
                              </ul> */}

                              <ul>
                                        <li> Continent: {riverInfo?.continent} </li>
                                        <li> Length: {riverInfo?.length} </li>
                                        <li> Outflow: {riverInfo?.outflow} </li>
                              </ul>

                    </div>
          )
}


export default RiverInformation


RiverInformation.propTypes = {
          name: PropTypes.string.isRequired
}
