import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Homepage from './components/pages/homepage/Homepage';
import Ranking from './components/pages/ranking/Ranking';
import About from './components/pages/about/About';
import AddPoint from './components/pages/add-point/AddPoint';
import Sidebar from './components/shared/sidebar/Sidebar';

export const MainNavigator = createDrawerNavigator(
  {
    Homepage: {
      screen: Homepage,
    },
    AddPoint: {
      screen: AddPoint,
    },
    Ranking: {
      screen: Ranking,
    },
    About: {
      screen: About,
    },
  },
  {
    contentComponent: (navigation) => <Sidebar {...navigation} />,
  },
);

const App = createAppContainer(MainNavigator);

export default App;
