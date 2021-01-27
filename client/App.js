import React from 'react';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import ScreenContainer from './src/ScreenContainer';
import reducers from './src/redux/reducers';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

store.subscribe(() => { console.log("hello", store.getState()) });
// store.dispatch(signInUser({ id: 'new', token: 'new token' }))

export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat-Thin': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-ExtraLight': require('./src/assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-Light': require('./src/assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-ExtraBold': require('./src/assets/fonts/Montserrat-ExtraBold.ttf'),
  });

  if ( !fontsLoaded ) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <ScreenContainer />
      </Provider>
    );
  }
}
