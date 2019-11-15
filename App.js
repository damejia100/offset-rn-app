import React from 'react';
import {
  StyleSheet,
  Text,
  View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './app/components/Login';
import SignUp from './app/components/SignUp';
import HomeScreen from './app/components/Homescreen';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

const Application = createStackNavigator({
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp
  },
  Home: {
    screen: HomeScreen,
  }
});

export default createAppContainer(Application);

// export default class App extends React.Component {
//   render() {
//     return (
//       <Application />
//     );
//   }
// }

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
