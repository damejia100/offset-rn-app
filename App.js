import React from 'react';
import {
  StyleSheet,
  Text,
  View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import * as Font from 'expo-font';

import { createStackNavigator } from 'react-navigation-stack';
import Login from './app/components/Login';
import SignUp from './app/components/SignUp';
import Homescreen from './app/components/Homescreen';

const AppContainer = createAppContainer(AppNavigator)
const AppNavigator = createStackNavigator({
  Home: {
    screen: Homescreen,
  },
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp
  }
});

const bottomTabNavigator = createBottomTabNavigator(
  {
  Home: Homescreen,
  Login: Login,
  SignUp: SignUp
  },
  {
    initialRouteName: 'Home'
  }
)

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default createAppContainer(bottomTabNavigator);

// class App extends React.Component {

//   state= {
//     fontLoaded: false
//   }

//   async componentDidMount() {
//     // await Font.loadAsync({
//     //   'Exo-Medium': require('./assets/fonts/Exo-Medium.ttf'),
//     //   'Exo-Regualar': require('./assets/fonts/Exo-Regualar.ttf'),
//     //   'Ubuntu': require('./assets/fonts/Ubuntu.ttf')
//     // });
//     // this.setState({fontLoaded: true})
//   }
//   render() {
//     return (
//       <Application />
//     );
//   }
// }
