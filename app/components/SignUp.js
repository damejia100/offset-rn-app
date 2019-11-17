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
import axios from 'axios'

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      password: ''
    }
    this.signUp = this.signUp.bind(this)
    this._loadingInitialState = this._loadingInitialState.bind(this)
  }


  componentDidMount() {
    this._loadingInitialState().done();

  }

  async  _loadingInitialState () {
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Homescreen');
    }
  }

  async signUp (user) {
    try {
      const {data} = await axios.post('http://71.190.247.98:3000/api/user/', user)
      this.setState({data})
      console.log('data returned from db>>>', data)
      // if (res.success === true) {
      //   AsyncStorage.setItem('user', res.user);
      //   this.props.navigation.navigate('Homescreen');
      // }
      // else {
      //   alert(res.message);
      // }

    } catch (error) {
      console.log('frontend login error>>>', error)
    }

    // fetch('http://71.190.247.98:3000/users', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    // })
    // .then((response) => response.json())

    // .then((res) => {

    //   alert(res.message);

    //   if (res.success === true) {
    //     AsyncStorage.setItem('user', res.user);
    //     this.props.navigation.navigate('Homescreen');
    //   }
    //   else {
    //     alert(res.message);
    //   }
    // })
    // .done();
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <Text style={styles.header}> Sign Up </Text>

            <TextInput
            style={styles.textInput}
            placeholder="First Name"
            onChangeText={ (firstName) => this.setState({firstName})}/>

            <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={ (email) => this.setState({email})}/>

            <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={ (password) => this.setState({password})}
            secureTextEntry={true}/>

          <TouchableOpacity style={styles.button} onPress={()=>this.signUp(this.state)}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>

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
