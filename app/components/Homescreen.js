import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux'
import PlasticTracker from './plasticTracker';
import ReusableTracker from './resusableTracker';
import { getPlasticCount, getReusableCount } from '../reducers/index';

class Homescreen extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hi, Marley!</Text>
        <Text style={styles.text}>Your current offset is...</Text>
        <Text style={styles.offsetCount}>{this.state.offsetCount}</Text>
        <Text style={styles.LogText}>Log plastic vs. resuable bottle usage:</Text>

        <View style={styles.logPlastic}>
          <PlasticTracker
          plasticBottles={this.props.totalPlastic}
          />
        </View>

        <View style={styles.logResuable}>
          <ReusableTracker
          reusableBottles={this.props.totalReusale}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
const mapStateToProps = state => ({
  totalPlastic: state.totalPlastic,
  totalReusale: state.totalReusale,
  offsetCount: state.offsetCount
})

const mapDispatchToProps = dispatch => ({
  getPlasticCount: () => dispatch(getPlasticCount()),
  getReusableCount: () => dispatch(getReusableCount())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homescreen);
