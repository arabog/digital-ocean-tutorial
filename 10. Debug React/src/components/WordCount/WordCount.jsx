import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TextContext } from '../App/App';


const WordCount = ( { show } ) => {
          const text = useContext(TextContext)

          if(!show) {
                    return null
          }


          return (
                    <div>
                              Word Count: {text.split(" ").length}
                    </div>
          )
}


export default WordCount


WordCount.proTypes = {
          show: PropTypes.bool.isRequired
}
