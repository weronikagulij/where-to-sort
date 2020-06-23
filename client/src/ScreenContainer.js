import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Homepage from './components/pages/homepage/Homepage';
import Ranking from './components/pages/ranking/Ranking';
import About from './components/pages/about/About';
import AddPoint from './components/pages/add-point/AddPoint';
import Sidebar from './components/shared/sidebar/Sidebar';
import Login from './components/pages/login/Login';

export const MainNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
    },
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

const ScreenContainer = createAppContainer(MainNavigator);

export default ScreenContainer;
