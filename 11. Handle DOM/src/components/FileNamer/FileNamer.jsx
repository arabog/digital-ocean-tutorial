import "./FileNamer.css"


const FileNamer = () => {


          return (
                    <div className="wrapper" >
                              <div className="preview">
                                        <h2> Preview: </h2>
                              </div>

                              <form className="form">
                                        <label htmlFor="name">
                                                  <p>Name: </p>

                                                  <input type="text" name="name" />
                                        </label>


                                        <div> <button> Save </button> </div>
                              </form>
                    </div>
          )
}


export default FileNamer
