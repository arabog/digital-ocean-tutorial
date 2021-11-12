
/*
Switch statements are particularly useful if you have 
a reducer that can handle many different actions 
because it makes those actions more readable 
in your code.
*/ 
function cartReducer(state, action) {

          switch(action.type) {
                    case `add`:
                              return [...state, action.product]

                    case "remove":
                              const productIndex = state.findIndex(item => item.name === action.product.name)

                              if(productIndex < 0) {
                                        return state
                              }

                              const update = [...state]

                              update.splice(productIndex, 1)

                              return update

                    // returns an object: bcos our product is an {}
                    default:
                              return state
          }
}

export default cartReducer