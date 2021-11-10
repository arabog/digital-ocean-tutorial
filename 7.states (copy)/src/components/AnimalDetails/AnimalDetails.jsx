import "./AnimalDetails.css"
import PropTypes from "prop-types"


const convertFood = food => {
          switch(food) {
                    case 'insects':
                              return '🐜';

                    case "meat":
                              return '🍖';

                    default:
                              return '🌱';
          }
}


const AnimalDetails = ({diet, scientificName}) => {


          return (
                    <div className="details">
                              <h4> Details: </h4>

                              <div className="science"> Scientific Name: {scientificName}</div>

                              <div>
                                        Diet: {
                                                  diet.map(food => (
                                                            // called a fxn inside d loop
                                                            convertFood(food))
                                                  )
                                                  
                                                  .join(' ')
                                                  
                                        }
                              </div>
                    </div>
          )
}


export default AnimalDetails


AnimalDetails.propTypes = {
          diet: PropTypes.arrayOf(PropTypes.string).isRequired,

          scientificName: PropTypes.string.isRequired,
}
