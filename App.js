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
import HomeScreen from './app/components/Homescreen';

const Application = createStackNavigator({
  Home: {
    screen: HomeScreen,
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
  Home: HomeScreen,
  Login: Login,
  SignUp: SignUp
  },
  {
    initialRouteName: 'Home'
  }
)
export default createAppContainer(bottomTabNavigator);
// export default createAppContainer(Application);
// this was working for createStackNavigator()

class App extends React.Component {

  state= {
    fontLoaded: false
  }

  async componentDidMount() {
    // await Font.loadAsync({
    //   'Exo-Medium': require('./assets/fonts/Exo-Medium.ttf'),
    //   'Exo-Regualar': require('./assets/fonts/Exo-Regualar.ttf'),
    //   'Ubuntu': require('./assets/fonts/Ubuntu.ttf')
    // });
    // this.setState({fontLoaded: true})
  }
  render() {
    return (
      <Application />
    );
  }
}

// <View style={styles.container}>
      //   <SignUp />
      // </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#00c4cc',
//     paddingLeft: 60,
//     paddingRight: 60,
//   },
// });
