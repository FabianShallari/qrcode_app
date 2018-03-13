import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ScreensConfig from './config.js';

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

  handleBarCode = (event) => {
    const { focused } = this.state;
    console.log("QR EVENT: ", event)

    if (focused) {
      const { navigation } = this.props;

      console.log("Data: ", event.data)

      navigation.navigate(ScreensConfig.Result.path, this.paramsForQrCode(event.data));
    }
  }

  paramsForQrCode = (qrData) => {
    return Object.keys(recognizedQrCodes).includes(qrData) ? recognizedQrCodes[qrData] : fallbackParams;
  }
  
};

const recognizedQrCodes = {
  dogs: {
    topText: 'Hug me, cuddle me',
    imageUri: 'https://i.imgur.com/YikCID7.jpg',
    bottomText: "C'mon, I'm your friend, your best friend"
  },
  cats: {
    topText: "Gimme Food HOOMAN!!! NOW",
    imageUri: 'https://i.imgur.com/wYTCtRu.jpg',
    bottomText: 'What are you still staring at?????'
  }
}

const fallbackParams = {
  topText: "Well, that didn't go as planned now, did it?",
  imageUri: 'https://i.imgur.com/vkvrmWO.png',
  bottomText: "Can't trick the master trickster!!!"
}