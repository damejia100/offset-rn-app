import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { addedPlastic, subtractedPlastic} from '../reducers/index';


class PlasticTracker extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { addedPlastic, subtractedPlastic, totalPlastic } = this.props

    return (
      <View style={styles.logPlastic}>
        <TouchableOpacity style={styles.button} onPress={() => subtractedPlastic()}>
          <Text style={styles.btnText}> - </Text>
        </TouchableOpacity>

          <View style={styles.log}>
            <Text style={styles.logCount}> {totalPlastic} </Text>
            <Text style={styles.logTypeText}>plastic bottle</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => addedPlastic()}>
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
    padding: 20,
    borderRadius: 50,
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

const mapDispatchToProps = dispatch => {
  return {
    addedPlastic: () => dispatch(addedPlastic()),
    subtractedPlastic: () => dispatch(subtractedPlastic())
  };
};

export default connect(null, mapDispatchToProps)(PlasticTracker);
