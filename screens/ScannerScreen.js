import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import ScreensConfig from './config.js';

export default class ScannerScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <TouchableOpacity>
        <Button
         title={"Hit me"}
         onPress={() => navigation.navigate(ScreensConfig.Result.path)}
         /> 
      </TouchableOpacity>
    )
  }
};
