const ADD_BIRD = "ADD_BIRD";


// https://redux.js.org/introduction/getting-started

// actions are functions that return an object.
// The object is what you will ultimately pass into the dispatch function.


export function addBird(bird) {

          return {
                    type: ADD_BIRD,

                    bird,
          }

}

/*
The type field is important for communicating with reducers

the actions convey the change you want to make on the data 
and the reducer applies those changes to return a new state.
*/ 


const INCREMENT_BIRD = "INCREMENT_BIRD";


export function incrementBird (arg) {

          return {
                    type: INCREMENT_BIRD,

                    arg,
          }

}


/*
When Redux receives an action you have dispatched, it will 
pass the action to the reducers and they will update the data.
*/ 