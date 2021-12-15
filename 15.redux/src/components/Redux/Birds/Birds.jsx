// you are exporting the function so that you can 
// later import and dispatch it from your component.
import { combineReducers } from "redux";


const ADD_BIRD = "ADD_BIRD";
const INCREMENT_BIRD = "INCREMENT_BIRD";


// action
export function addBird(bird) {

          return {
                    type: ADD_BIRD,

                    bird,
          }
}


/*
This action is separate, but you will use the same reducer. 
Remember, the actions convey the change you want to make 
on the data and the reducer applies those changes to return 
a new state.
*/ 
export function incrementBird(bird) {

          return {
                    type: INCREMENT_BIRD,

                    bird,
          }
}



/*
Since Redux returns the state if there are no changes, 
add a default state using default parameters.
*/ 

const defaultBirds = [
          {
                    name: "robin",

                    views: 1
          }
];


/*
Notice that you are not exporting the reducer. You 
will not use the reducer directly and instead will 
combine them into a usable collection that you will
export and use to create your base store in index.js.

Notice also that you need to return the state if there 
are no changes. Redux will run all the reducers 
anytime you dispatch an action, so if you don’t 
return state you risk losing your changes.
*/ 


// reducers
function birds (state=defaultBirds, action) {
          // return state;

          switch(action.type) {
                    case ADD_BIRD: 
                              return [
                                        ...state,

                                        {
                                                  name: action.bird,

                                                  views: 1
                                        }
                              ];

                    case INCREMENT_BIRD:
                              const bird = state.find(b => action.bird === b.name);

                              const birds = state.filter(b => action.bird !== b.name);

                              return [
                                        ...birds,

                                        {
                                                  ...bird,

                                                  views: bird.views + 1
                                        }
                              ];

                    default: 
                              return state;
          }
}

/*
Now that you have a reducer returning your state, you 
can use the action to apply the changes. The most 
common pattern is to use a switch on the action.type
to apply changes.

Create a switch statement that will look at the
action.type .
If the case is ADD_BIRD, spread out the current state 
into a new array and add the bird with a single view:
*/


/*
Notice that you are returning the state
as the default value. More importantly, 
you are not mutating state directly. Instead, 
you are creating a new array by spreading 
the old array and adding a new value.
*/ 


/*
Now that you have one action, you can create an 
action for incrementing a view.
*/ 

/*
Notice that you are not using the reducers to sort the data. 
Sorting could be considered a view concern since the view 
displays the information to a user.
You could have one view that sorts by name and one view 
that sorts by view count, so it’s better to let individual 
components handle the sorting.
Instead, keep reducers focused on updating the data, 
and the component focused on converting the data to a 
usable view for a user.

This reducer is also imperfect since you could add birds with 
the same name. In a production app you would need to either 
validate before adding or give birds a unique id so that 
you could select the bird by id instead of name .
*/ 


/*
Now you have two complete actions and a reducer. The final 
step is to export the reducer so that it can initialize the store. 
In the first step i.e in Index.js, you created the store by passing 
a function that returns an object. You will do the same thing 
in this case. The function will take store and the action and then 
pass the specific slice of the store to the reducers along 
with the action
*/ 

// export function birdApp(store={}, action) {


//           return {
//                     birds: birds(store.birds, action)
//           }
// }

const birdApp = combineReducers(
          {
                    birds
          }
)

export default birdApp


/*
Redux has a helper function called combineReducers
that combines the reducers for you.
Inside of birds.js, import combineReducers from redux.
Then call the function with birds
and export the result:


there is an officially supported project called Redux Toolkit 
that can help you reduce the amount of boilerplate code. 
The Redux Toolkit provides an opinionated set of utilities to 
quickly create actions and reducers, and will also let you
create and configure your store with less code.
*/ 