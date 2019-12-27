import React from 'react';

// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import Homepage from './src/components/pages/homepage/Homepage';
// import Ranking from './src/components/pages/ranking/Ranking';
// import About from './src/components/pages/about/About';
// import AddPoint from './src/components/pages/add-point/AddPoint';
// import Sidebar from './src/components/shared/sidebar/Sidebar';
import ScreenContainer from './src/ScreenContainer';
import reducers from './src/redux/reducers';

// action
// const increment = () => ({
//   type: 'INCREMENT',
//   name: 'INCREMENT',
// });

// const decrement = () => ({
//   type: 'INCREMENT',
//   name: 'INCREMENT',
// });

const store = createStore(reducers);

// store.subscribe(() => console.log('sdsd', store.getState()));
// // dispatch
// store.dispatch(increment());

export default function App() {
  return (
    <Provider store={store}>
      <ScreenContainer />
    </Provider>
  );
}
