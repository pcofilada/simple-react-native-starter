import { StackNavigator } from 'react-navigation';

import Main from './components/Main';

const BaseNavigation = StackNavigator({
  Main: { screen: Main },
});

export default BaseNavigation;
