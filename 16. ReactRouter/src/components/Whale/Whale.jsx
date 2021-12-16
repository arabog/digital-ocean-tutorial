import React from 'react'

import Beluga from "./Beluga"
import Blue from "./Blue"

import { 
          // useLocation, 
          // useParams,
          
          Switch,
          Route,
          useRouteMatch
} from 'react-router-dom'


const Whale = () => {
          /*
          // usiing search params
          const { search }  = useLocation()


          const match = search.match(/type=(.*)/)
          // ['type=beluga', 'beluga', index: 1, input: '?type=beluga', groups: undefined]

          const type = match?.[1]
          */

          // using URL params
          // const { type } = useParams()


          // Nesting route
          const { path } = useRouteMatch()


          return (
                    <>
                              <h2> Whale </h2>

                              {/* search params */}
                              {/* 
                                        { 
                                                  type === "beluga" && <Beluga />
                                        }

                                        {
                                                  type === "blue" && <Blue />
                                        }
                              */}


                              {/* URL params */}
                              {/* { 
                                        type === "beluga" && <Beluga />
                              }

                              {
                                        type === "blue" && <Blue />
                              } */}


                              {/* Nesting route */}
                              <Switch>
                                        <Route path={`${path}/beluga`} >
                                                  <Beluga />
                                        </Route>
                                        
                                        <Route path={`${path}/blue`} >
                                                  <Blue />
                                        </Route>
                              </Switch>

                    </>
          )
}


export default Whale
