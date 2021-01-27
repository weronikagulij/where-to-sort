export const signInUser = (user) => ({
  type: 'SIGN_IN',
  name: 'SIGN_IN',
  payload: user
});

export const continueWithoutLogin = () => ({
  type: 'CONTINUE_WITHOUT_LOGIN',
  name: 'CONTINUE_WITHOUT_LOGIN',
  payload: null
});
