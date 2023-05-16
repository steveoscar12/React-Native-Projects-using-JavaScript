import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      count: 0
    };
  //  this.updateCount = this.updateCount.bind(this);
  //  this.resetCount = this.resetCount.bind(this);
  }
/*
  updateCount(){
    this.setState({ 
      count: this.state.count + 1 
    });
    console.log(this.state.count);
  }

  resetCount(){
    this.setState({
     count: 0
    });
  }

*/

 updateCount = () => this.setState({count: this.state.count + 1});
 resetCount = () => this.setState({count: 0});

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.count}</Text>
        <Text style={styles.label} onPress={this.updateCount}>Count</Text>
        <Text style={styles.label} onPress={this.resetCount}>Reset</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  label: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
