import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CustomText extends Component {
  setFontType = type => {
    switch (type) {
        case 'black':
            return 'Lato-Black';
        case 'blackItalic':
            return 'Lato-BlackItalic';
        case 'bold':
            return 'Lato-Bold';
        case 'boldItalic':
            return 'Lato-BoldItalic';
        case 'italic' :
            return 'Lato-Italic';
        case 'light' :
            return 'Lato-Light';
        case 'lightItalic':
            return 'Lato-LightItalic';
        case 'thin':
            return 'Lato-Thin';
        case 'thinItalic':
            return 'Lato-ThinItalic';
        default:
            return 'Raleway-Regular';
    }
  };

  render() {
    const font = this.setFontType(this.props.type ? this.props.type : 'normal');
    const style = [{ fontFamily: font }, this.props.style || {}];
    const allProps = Object.assign({}, this.props, { style: style });
    return <Text {...allProps}>{this.props.children}</Text>;
  }
}
export default CustomText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});