import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Homescreen extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.header}> OFFSET </Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00c4cc'
  },
  header: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  }
})
