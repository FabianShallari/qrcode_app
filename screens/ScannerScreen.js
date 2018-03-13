import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ScreensConfig from './config.js';

export default class ScannerScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
            onBarCodeRead={this.handleBarCode}
            style = {{flex: 1}}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera'}
        />
      </View>
    );
  }

  handleBarCode = () => {
    const { navigation } = this.props;

    navigation.navigate(ScreensConfig.Result.path);
  }
};
