
import { combineReducers } from 'redux';

// import { mapReducer, scrollViewReducer, locationReducer } from './mapReducer';
import mapReducer from './mapReducer';
import loggedUserReducer from './loggedUserReducer';

const reducers = combineReducers({
  map: mapReducer,
  loggedUser: loggedUserReducer,
//   scrollView: scrollViewReducer,
//   location: locationReducer,
});

export default reducers;
