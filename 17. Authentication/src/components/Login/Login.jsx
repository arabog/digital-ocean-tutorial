import React, { useState, useEffect } from 'react'
import "./Login.css"

import PropTypes from 'prop-types';
import axios from 'axios';

/*
async function loginUser(credentials) {
          return fetch('http://localhost:8080/login', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
          },

          body: JSON.stringify(credentials)

          })

          .then(data => data.json())
}
*/ 


const Login = ( { userToken } ) => {
          const [username, setUsername] = useState()
          const [password, setPassword] = useState()

          const [loginInfo, setLoginInfo] = useState()


          useEffect(() => {
                    const loginUser = async () => {
                              const res = await axios.post("http://localhost:8080/login", {
                                        username,

                                        password
                              })

                              setLoginInfo(res.data)
                    }

                    loginUser()
          }, [username, password])


          const handleSubmit = (e) => {
                    e.preventDefault()

                    userToken(loginInfo)
          }


          return (
                    <div className='login-wrapper'>
                              <h1>Please Log In</h1>

                              <form onSubmit={handleSubmit}>
                                        <label htmlFor="">
                                                  <p>Username</p>

                                                  <input 
                                                            type="text" 

                                                            onChange={(e) => setUsername(e.target.value)}
                                                  />
                                        </label>

                                        <label htmlFor="">
                                                  <p>Password</p>

                                                  <input 
                                                            type="password" 

                                                            onChange={(e) => setPassword(e.target.value)}
                                                  />
                                        </label>

                                        <div>
                                                  <button type="submit">Submit</button>
                                        </div>
                              </form>
                    </div>
          )
}


export default Login


Login.propTypes = {
          setToken: PropTypes.func.isRequired
}
