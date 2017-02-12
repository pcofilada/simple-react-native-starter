import { StackNavigator } from 'react-navigation';

import Main from './components/Main';
import Login from './components/Login';

const BaseNavigation = StackNavigator({
    Login: { screen: Login },
    Main: { screen: Main }
}, {
    headerMode: 'screen'
});

export default BaseNavigation;
