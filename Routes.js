import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Principal from './pages/Principal';
import ScreenA from './pages/ScreenA';
import ScreenB from './pages/ScreenB';


const HomeStack = createStackNavigator({Home: Home});
const PrincipalStack = createStackNavigator({ Principal: Principal, ScreenA: ScreenA, ScreenB: ScreenB });

const AppNavigator = createSwitchNavigator({
    Home: HomeStack,
    Principal: PrincipalStack    
},

    {
        navigationOptions: {
        },
        initialRouteName: 'Home',

    });
    
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;