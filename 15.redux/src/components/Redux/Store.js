import { combineReducers } from "redux"
import { birds } from "./Reducer"


// combine d reducers i.e addbird and incrementbird reducers
const birdApp = combineReducers(
          {
                    birds
          }
)


export default birdApp;

// export function birdApp(store = {}, action) {
//           return {
//                     birds: birds(store.birds, action)
//           }
// }