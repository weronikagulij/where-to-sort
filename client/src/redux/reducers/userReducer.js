const INITIAL_STATE = {
  token: null,
  id: null
};

/**
 * User is logged in when state token and id are set
 * User continued without logging in when token
 * and id are null
 * User didn't log in or continue when state is null
 * @param {token: string; id: string} state - state of the user
 * @param {string} action - action to do
 */
const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.payload;
    case 'CONTINUE_WITHOUT_LOGIN':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
