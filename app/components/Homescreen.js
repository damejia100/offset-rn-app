import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PlasticTracker from './plasticTracker';
import ReusableTracker from './resusableTracker'

export default class Homescreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: 'Marley',
      plasticBottles: 0,
      reusableBottles: 0,
      offsetCount: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hi, {this.state.firstName} </Text>
        <Text style={styles.text}>Your current offset is...</Text>
        <Text style={styles.offsetCount}>{this.state.offsetCount}</Text>
        <Text style={styles.LogText}>Log your plastic vs. resuable bottle usage:</Text>

        <View style={styles.logPlastic}>
          <PlasticTracker
          plasticBottles={this.state.plasticBottles}
          offsetCount={this.state.offsetCount}
          />
        </View>

        <View style={styles.logResuable}>
          <ReusableTracker
          reusableBottles={this.state.reusableBottles}
          offsetCount={this.state.offsetCount}
          />
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  text: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 30,
    paddingBottom: 20
  },
  offsetCount: {
    fontSize: 40,
    color: '#00c4cc',
    paddingBottom: 20,
    fontWeight: 'bold'
  },
  LogText: {
    fontSize: 20,
    color: '#666666',
    lineHeight: 30,
    paddingBottom: 20
  },
  logPlastic: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
  },
  logResuable: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',

  }
})
