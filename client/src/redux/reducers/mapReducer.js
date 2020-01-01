// const mapReducer = (state = null, action) => {
//   console.log(action.name);
//   switch (action.name) {
//     case 'REGISTER_MAP':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const locationReducer = (state = null, action) => {
//   console.log(action.name);
//   switch (action.name) {
//     case 'REGISTER_LOCATION':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const scrollViewReducer = (state = null, action) => {
//   console.log(action.name);
//   switch (action.name) {
//     case 'REGISTER_SCROLLVIEW':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export { mapReducer, locationReducer, scrollViewReducer };

const mapReducer = (state = { map: null, scrollView: null }, action) => {
  switch (action.name) {
    case 'REGISTER_SCROLLVIEW':
      return action.payload;
    case 'REGISTER_MAP':
      return action.payload;
    default:
      return state;
  }
};

export default mapReducer;
