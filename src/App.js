import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import Store from './Store';
import BaseNavigation from './Router';

//ENRTY POINT FOR APP WITH REDUX
const AppWithNavigationState = connect(state => ({
    nav: state.nav,
}))(({ dispatch, nav }) => (
    <BaseNavigation navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

const App = () => (
  <Provider store={Store()}>
    <AppWithNavigationState />
  </Provider>
);
export default App;
