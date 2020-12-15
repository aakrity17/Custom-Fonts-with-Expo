import React, { Component } from 'react';
import { View, } from 'react-native';
import Text from '../Components/CustomText';

class screens extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text type = "italic" style = {{fontSize:30}}> Hey there !! </Text>
      </View>
    );
  }
}

export default screens;
