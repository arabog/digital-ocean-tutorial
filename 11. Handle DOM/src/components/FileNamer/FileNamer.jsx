import "./FileNamer.css"
import { useState, useEffect } from "react"


const FileNamer = () => {
          const [name, setName] = useState("")
          const [alert, setAlert] = useState(false)

          useEffect(() => {
                    const handleWindowClick = () => setAlert(false)

                    if(alert) {
                              window.addEventListener("click", handleWindowClick)
                    }else {
                              window.removeEventListener("click", handleWindowClick)
                    }

                    return () => window.removeEventListener("click", handleWindowClick)
                    
          }, [alert, setAlert])

          const validate = event => {
                    event.preventDefault()

                    if(/\*/.test(name)) {

                              setAlert(true)

                              return
                    }

                    setAlert(false)
          }


          // You could also access the name of the input using eventt.target.name
          const handleChange = (e) => {
                    // e.preventDefault()

                    setName(
                              [e.target.name] = e.target.value 
                    )
          }


          return (
                    <div className="wrapper" >
                              <div className="preview">
                                        <h2> Preview: {name}.js </h2>
                              </div>

                              <form className="form">
                                        <label htmlFor="name">
                                                  <p>Name: </p>

                                                  <input 
                                                            type = "text" 
                                                            name = "name" 

                                                            autoComplete = "off"

                                                            // onBlur={() => setAlert(false)}

                                                            // onChange={event => setName(event.target.value)}
                                                            onChange={handleChange}

                                                            // onFocus={() => setAlert(true)}
                                                  />
                                        </label>

                                        <div className="information-wrapper">
                                                  <button 
                                                            className="information"
                                                            onClick={() => setAlert(true)}
                                                            type="button"
                                                  >
                                                            More information
                                                  </button>

                                                  {
                                                            alert && 
                                                                      <div> 
                                                                                <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
                                                                                
                                                                                <br />
                                                                                
                                                                                <span role="img" aria-label="not allowed">⛔ </span>*
                                                                      </div> 
                                                  }

                                        </div>



                                        <div> 
                                                  <button onClick={validate}> 
                                                            Save 
                                                  </button> 
                                        </div>
                              </form>
                    </div>
          )
}


export default FileNamer
