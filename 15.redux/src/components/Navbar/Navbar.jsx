import React, { useState } from 'react'
import "./Navbar.css"


const Navbar = () => {
          const [show, setShow] = useState(false)


          return (
                    <div className='nav-wrapper'>
                              Navbar

                              <img src="https://image.shutterstock.com/image-illustration/male-default-placeholder-avatar-profile-260nw-582509551.jpg" alt="img" />

                              <div className='open'>
                                        <div className='droppps' onClick={()=> {setShow(!show)}}>
                                                  <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="" className='drop' />
                                        </div>

                                        <div>
                                                  {
                                                            show && (
                                                                      <div className="dropdown">
                                                                                <ul>
                                                                                          <li>Home</li>
                                                                                          <li>School</li>
                                                                                          <li>Work</li>
                                                                                          <li>Church</li>
                                                                                          <li>Code</li>
                                                                                </ul>
                                                                      </div>
                                                            )
                                                  }

                                        </div>
                              </div>
                    </div>
          )
}

export default Navbar
