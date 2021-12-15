/*
You will not use the reducer directly and instead will 
combine them into a usable collection that you will 
export and use to create your base store in index.js .

Notice also that you need to return the state if there are 
no changes. Redux will run all the reducers anytime you 
dispatch an action, so if you don’t return state you risk 
losing your changes.

*/ 

const defaultBirds = [
          {
                    name: "robin",

                    views: 0
          }
]


const ADD_BIRD = "ADD_BIRD";
const INCREMENT_BIRD = "INCREMENT_BIRD";


export function birds(state = defaultBirds, action) {

          switch (action.type) {

                    case ADD_BIRD: 
                              return [
                                        ...state,

                                        {
                                                  name: action.bird,

                                                  views: 0
                                        }
                              ];

                    case INCREMENT_BIRD:
                              // d selected bird
                              const bird = state.find(b => action.arg === b.name );

                              // all d birds except d selected bird
                              const birds = state.filter(b => action.arg !== b.name)

                              return [
                                        ...birds,           //curent bird state
                                        
                                        {
                                                  ...bird, // updating d bird by cr8ing a new obj with and incremted view
                                                  
                                                  views: bird.views + 1,
                                        }
                              ];


                    
                    default:
                              return state;
          }

}


// export default birds


/*
Reducers are functions that will determine how a state 
should change based on actions. The actions don’t make 
changes themselves; the reducers will
take the state and make changes based on actions

A reducer receives two arguments: the current state 
and the action. The current state refers to the state 
for a particular section of the store

Generally, the name of the reducer will match with 
a field in the store



*/ 