import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './app/components/SignUp'
// import {StackNavigator} from 'react-navigation'

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00c4cc',
    paddingLeft: 60,
    paddingRight: 60,
  },
});
