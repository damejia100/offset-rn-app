import * as React from 'react';
import {Provider} from 'react-redux'
import store from './app/store'
import Homescreen from './app/components/Homescreen';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Homescreen />
      </Provider>
    )
  }
}
