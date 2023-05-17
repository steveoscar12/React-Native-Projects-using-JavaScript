import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ListScreen from './src/screens/ListScreen';
import NewScreen from './src/screens/NewScreen';
import ViewScreen from './src/screens/ViewScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LoginScreen" component={LoginScreen} left={()=>null} title="Steve" initial={true} />
          <Scene key="SignupScreen" component={SignupScreen} left={()=>null} title="Steve" />
          <Scene key="ListScreen" component={ListScreen} left={()=>null} title="Steve" />
          <Scene key="NewScreen" component={NewScreen} left={()=>null} title="Steve" />
          <Scene key="ViewScreen" component={ViewScreen} left={()=>null} title="Steve" />
        </Scene>
      </Router>
    )
  }
}
