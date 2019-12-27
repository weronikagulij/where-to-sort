const loggedUserReducer = (state = false, action) => {
  switch (action.name) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
};

export default loggedUserReducer;
