import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class PlasticTracker extends React.Component {
  constructor(props){
    super(props)
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  increase() {
    this.props.reusableBottles = this.props.reusableBottles + 1
    this.props.offsetCount = this.props.offsetCount + 1
    this.setState({
      reusableBottles: this.props.reusableBottles,
      offsetCount: this.props.offsetCount
    })
  }

  decrease() {
    this.props.reusableBottles = this.props.reusableBottles - 1
    this.props.offsetCount = this.props.offsetCount - 1
    this.setState({
      reusableBottles: this.props.reusableBottles,
      offsetCount: this.props.offsetCount
    })
  }


  render() {
    return (
      <View style={styles.logResuable}>
          <TouchableOpacity style={styles.button} onPress={() => this.decrease()}>
            <Text style={styles.btnText}> - </Text>
          </TouchableOpacity>

          <View style={styles.log}>
            <Text style={styles.logCount}> {this.props.reusableBottles} </Text>
            <Text style={styles.logTypeText}>reusable bottle</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => this.increase()}>
            <Text style={styles.btnText}> + </Text>
          </TouchableOpacity>

        </View>


    );
  }

}

const styles = StyleSheet.create({
  logResuable: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#00c4cc',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    padding: 10
  },
  button: {
    backgroundColor: '#00c4cc',
    borderRadius: '50%',
    padding: 25,
  },
  btnText: {
    color: '#fff',
    fontSize: 24
  },
  log: {
    alignItems: 'center'
  },
  logCount: {
    color: '#00c4cc',
    fontSize: 40
  },
  logTypeText: {
    color: '#21e5ba',
    fontSize: 14
  }
})
