import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import Text from '../Components/CustomText';

class screens extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text type = "black" style = {styles.text}> This is the Sample Text (Black)</Text>
        <Text type = "blackItalic" style = {styles.text}> This is the Sample Text  (Black Italic)</Text>
        <Text type = "bold" style = {styles.text}> This is the Sample Text (Bold)</Text>
        <Text type = "boldItalic" style = {styles.text}> This is the Sample Text (Bold Italic)</Text>
        <Text type = "italic" style = {styles.text}> This is the Sample Text (Italic)</Text>
        <Text type = "light" style = {styles.text}> This is the Sample Text (Light)</Text>
        <Text type = "lightItalic" style = {styles.text}> This is the Sample Text (Light Italic)</Text>
        <Text type = "thin" style = {styles.text}> This is the Sample Text (Thin)</Text>
        <Text type = "thinItalic" style = {styles.text}> This is the Sample Text (Thin Italic)</Text>
        <Text style = {styles.text}> This is the Sample Text (Regular-default)</Text>
      </View>
    );
  }
}

export default screens;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:18
  }
})