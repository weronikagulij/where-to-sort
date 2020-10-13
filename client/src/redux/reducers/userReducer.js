const INITIAL_STATE = {
  token: null,
  id: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
