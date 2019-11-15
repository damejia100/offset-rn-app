import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this._loadingInitialState().done();

  }

  _loadingInitialState = async () => {

    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Homescreen');
    }

  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <Text style={styles.header}> Sign In </Text>

            <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={ (email) => this.setState({email})}/>

            <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={ (password) => this.setState({password})}
            secureTextEntry={true}/>

          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    );
  }
  login = () => {

    fetch('http://71.190.247.98:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => response.json())
    .then((res) => {
      if (res.success === true) {
        AsyncStorage.setItem('user', res.user);
        this.props.navigation.navigate('Homescreen');
      }
      else {
        alert(res.message);
      }
    })
    .done();

  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00c4cc',
    paddingLeft: 40,
    paddingRight: 40
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
    fontSize: 20
  }
})
