import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
  static route = {
    navigationBar: {
      title: 'Main',
    },
  }


  render() {
    return (
      <View>
        <Text>React Native Boilerplate</Text>
      </View>
    );
  }
}

export default Main;
