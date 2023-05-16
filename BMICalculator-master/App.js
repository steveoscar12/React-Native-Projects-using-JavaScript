import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      weight: 0,
      height: 0,
      bmi: 0
    }
  }

  calculateBMI = () => {
    let totalBMI = Number((this.state.weight/Math.pow(this.state.height,2)) * 10000).toFixed(1);
    this.setState({bmi: totalBMI}, () => {
      if(this.state.bmi < 18.5){
        Alert.alert('You are underweight!');
      } else if(this.state.bmi >= 18.5 && this.state.bmi <= 24.9){
        Alert.alert('You are having a normal weight. Well done!');
      } else if(this.state.bmi >= 25 && this.state.bmi <= 29.9){
        Alert.alert('You are overweight!');
      } else if(this.state.bmi >= 30){
        Alert.alert('You are obese. Please watch your diet!');
      }
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>BMI Calculator</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(weight) => this.setState({weight})} style={Styles.instructions} placeholder='Weight in KG'/>
        <TextInput onChangeText={(height) => this.setState({height})} style={Styles.instructions} placeholder='Height in CM'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={Styles.container}>
        <Button color="#841584" onPress={this.calculateBMI} title='Calculate'/>
        <Text></Text>
        <Text style={Styles.instructions}>BMI: {this.state.bmi}</Text>
        </View>
      </View>
    );
  }
}
