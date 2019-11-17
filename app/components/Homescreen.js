import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CircleButton from 'react-native-circle-button';

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

        <CircleButton
          size={45}
          secondaryColor='#000000'
        />

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
  },
  CircleButton: {
    // alignSelf: "flex-end"
  }
})
