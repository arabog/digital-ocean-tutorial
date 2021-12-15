// NAMED ACTIONS AND ACTION CREATORS
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";

// function loginSuccess(payload) {
//           return { type: LOGIN_SUCCESS, payload };
// }

// function loginFailed(payload) {
//           return { type: LOGIN_FAILED, payload };
// }

// Reducer
const authState = {
          token: "",

          error: "",
};



// We can refactor our "classic" reducer from:

function authReducer(state = authState, action) {
          switch (action.type) {
                    case LOGIN_SUCCESS:
                              return { ...state, token: action.payload };

                    case LOGIN_FAILED:
                              return { ...state, error: action.payload };

                    default:
                              return state;
          }
}

/* To:

const newAuthReducer = createReducer(authState, {
          [loginSuccess]: (state, action) => {
                    state.token = action.payload;
          },

          [loginFailed]: (state, action) => {
                    state.error = action.payload;
          },
});

*/


export default authReducer
