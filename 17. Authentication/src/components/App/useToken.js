import { useState } from "react"


/*
By moving your component logic into an abstract 
custom Hook, you give yourself the ability to refactor 
without disrupting existing components.
*/


/*
export default function useToken () {

          const getToken= () => {
                    const tokenString = sessionStorage.getItem('token')
          
                    const userToken = JSON.parse(tokenString)
          
                    return userToken?.token
          }

          
          const [token, setToken] = useState(getToken())


          const saveToken = (userToken) => {
                    sessionStorage.setItem(
                              'token', 
                              
                              JSON.stringify(userToken)
                    )

                    setToken(userToken.token)
          }


          
                    // Finally, return an object that contains the
                    // token and setToken set to the saveToken 
                    // property name. This will give the component 
                    // the same interface.
                    // You can also return the values as an array, 
                    // but an object will give users a chance to 
                    // destructure only the values they want if you 
                    // reuse this in another component.
          
          return {
                    setToken: saveToken,

                    token
          }
} 
*/

export default function useToken () {

          const getToken= () => {
                    const tokenString = localStorage.getItem('token')
          
                    const userToken = JSON.parse(tokenString)
          
                    return userToken?.token
          }

          
          const [token, setToken] = useState(getToken())


          const saveToken = (userToken) => {
                    localStorage.setItem(
                              'token', 
                              
                              JSON.stringify(userToken)
                    )

                    setToken(userToken.token)
          }


          return {
                    setToken: saveToken,

                    token
          }
}