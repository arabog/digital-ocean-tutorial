import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss';

import UserContext from '../User/User';


const useStyles = createUseStyles({
          wrapper: {
                    borderBottom: "1px solid black",
                    padding: [15, 10],
                    textAlign: "right",
          }
})


const Navigation = () => {
          const classes = useStyles();

          const user = useContext(UserContext)


          return (
                    <div>
                              <div className={classes.wrapper}>
                                        Welcome, {user.name}
                              </div>
                    </div>
          )
}


export default Navigation
