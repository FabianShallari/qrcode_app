import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ScreensConfig from './config.js';
import resolveParamsForQrCode from '../qr';

export default class ScannerScreen extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      focused: false
    }
  }

  componentDidMount = () => {

    const { navigation } = this.props;
    
    this.blurListener = navigation.addListener(
      'willBlur',
      () => this.setState({focused: false})
    );

    this.focusListener = navigation.addListener(
      'didFocus',
      () => this.setState({focused: true})
    );
  }

  componentWillUnmount = () => {
    this.blurListener.remove();
    this.focusListener.remove();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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

  handleBarCode = (event) => {
    const { focused } = this.state;
    console.log("QR EVENT: ", event)

    if (focused) {
      const { navigation } = this.props;

      navigation.navigate(ScreensConfig.Result.path, resolveParamsForQrCode(event.data));
    }
  }
};

