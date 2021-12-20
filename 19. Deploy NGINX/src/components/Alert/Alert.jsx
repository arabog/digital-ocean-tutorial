import React from 'react'
import PropTypes from 'prop-types';

import { createUseStyles } from "react-jss"

const colors = {
          success: "#6da06f",

          error: "#f56260"
}

const useStyles = createUseStyles({
          wrapper: {
                    border: ({type}) => `1px solid ${colors[type]}`,

                    marginBottom: 15,

                    padding: 15,

                    position: "relative",

                    "& h2": {
                              color: ({type}) => colors[type],

                              margin: [0, 0, 10, 0]
                    }
          }
})

const Alert = ({children, title, type}) => {
          // const colors = {
          //           success: "#6da06f",

          //           error: "#f56260"
          // }

          // const style = {
          //           heading: {
          //                     color: colors[type],

          //                     margin: "0 0 10px 0"
          //           },

          //           wrapper: {
          //                     border: `1px solid ${colors[type]}`,

          //                     marginBottom: 15,

          //                     padding: 15,

          //                     position: "relative"
          //           }
          // }

          const classes = useStyles({ type })


          return (
                    <div className={classes.wrapper}>
                              <h2> {title} </h2>

                              {children}
                    </div>
          )
}


export default Alert


Alert.propTypes = {

          children: PropTypes.oneOfType([
                    PropTypes.arrayOf(PropTypes.element),
                    PropTypes.element.isRequired
          ]),

          title: PropTypes.string.isRequired,

          type: PropTypes.string.isRequired,
}