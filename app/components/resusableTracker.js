import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { addedReusable, subtractedReusable } from '../reducers/index';

class ReusableTracker extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { addedReusable, subtractedReusable, totalReusable } = this.props

    return (
      <View style={styles.logResuable}>
          <TouchableOpacity style={styles.button} onPress={() => subtractedReusable()}>
            <Text style={styles.btnText}> - </Text>
          </TouchableOpacity>

          <View style={styles.log}>
            <Text style={styles.logCount}> {totalReusable} </Text>
            <Text style={styles.logTypeText}>reusable bottle</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => addedReusable()}>
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
    padding: 25
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

const mapDispatchToProps = dispatch => {
  return {
    addedReusable: () => dispatch(addedReusable()),
    subtractedReusable: () => dispatch(subtractedReusable())
  }
}

export default connect(null, mapDispatchToProps)(ReusableTracker);
