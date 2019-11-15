import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.signUpForm}>
        <Text style={styles.header}>Sign Up</Text>

        <TextInput style={styles.textInput} placeholder="First Name"/>
        <TextInput style={styles.textInput} placeholder="Email"/>
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  signUpForm: {
    alignSelf: 'stretch'
  },
  header: {
    fontSize: 40,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textInput: {
    fontSize: 20,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 30,
    borderRadius: 2
  },
  btnText: {
    // fontWeight: 'bold',
    fontSize: 20
  }
});
