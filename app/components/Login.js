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
import axios from 'axios';
import { createAppContainer } from 'react-navigation';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.login = this.login.bind(this)
    this._loadingInitialState = this._loadingInitialState.bind(this)
  }


  componentDidMount() {
    this._loadingInitialState().done();
  }

  async  _loadingInitialState () {
    try {
      const value = await AsyncStorage.getItem('email')
      if(value !== null) {
        this.props.navigation.navigate('Home');
      }
    } catch(err) {
      console.log(err)
    }
  }

  async login (user) {
    try {
      const {data} = await axios.post('http://localhost:3000/api/user/login', user)

      this.setState({data})

      if (data !== null) {
        await AsyncStorage.setItem('email', data.email);
        this.props.navigation.navigate('Homescreen');
      }
      else {
        alert(data);
      }

    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <Text style={styles.header}>Log into your account</Text>

            <TextInput
            style={styles.textInput}
            placeholder="Email"
            autoCapitalize = 'none'
            onChangeText={ (email) => this.setState({email})}/>

            <TextInput
            style={styles.textInput}
            placeholder="Password"
            autoCapitalize = 'none'
            onChangeText={ (password) => this.setState({password})}
            secureTextEntry={true}/>

          <TouchableOpacity style={styles.button} onPress={()=>this.login(this.state)}>
            <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>

          <Text style={styles.account}>Need an account? Sign up.</Text>

        </View>

      </KeyboardAvoidingView>
    );
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
    alignSelf: 'flex-start',
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
  },
  account:  {
    paddingTop: 10
  }
})
