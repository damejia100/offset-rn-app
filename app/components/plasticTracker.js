import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'


export default class PlasticTracker extends React.Component {
  constructor(props){
    super(props)
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  increase() {
    this.props.plasticBottles = this.props.plasticBottles + 1
    this.props.offsetCount = this.props.offsetCount - 1
    this.setState({
      plasticBottles: this.props.plasticBottles,
      offsetCount: this.props.offsetCount
    })
  }

  decrease() {
    this.props.plasticBottles = this.props.plasticBottles - 1
    this.props.offsetCount = this.props.offsetCount + 1
    this.setState({
      plasticBottles: this.props.plasticBottles,
      offsetCount: this.props.offsetCount
    })
  }

  render() {
    console.log('in plasic render', this.props)
    return (
      <View style={styles.logPlastic}>
        <TouchableOpacity style={styles.button} onPress={() =>  this.decrease()}>
          <Text style={styles.btnText}> - </Text>
        </TouchableOpacity>

          <View style={styles.log}>
            <Text style={styles.logCount}> {this.props.plasticBottles} </Text>
            <Text style={styles.logTypeText}>plastic bottle</Text>
          </View>

          <TouchableOpacity style={styles.button}
          onPress={() => this.increase()}>
            <Text style={styles.btnText}> + </Text>
          </TouchableOpacity>

        </View>

    );
  }

}

const styles = StyleSheet.create({
  logPlastic: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#d63838',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    padding: 10,
    marginBottom: 20
  },
  button: {
    padding: 25,
    backgroundColor: '#d63838'
  },
  btnText: {
    color: '#fff',
    fontSize: 24
  },
  log: {
    alignItems: 'center'
  },
  logCount: {
    color: '#d63838',
    fontSize: 40
  },
  logTypeText: {
    color: '#d63838',
    fontSize: 14
  }
})
