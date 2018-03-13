import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

export default class ResultScreen extends Component {
  
  render() {
    const { params } = this.props.navigation.state; 
    const { height, width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text style={styles.topText}>
          {params.topText}
        </Text>
        <Image
          source={{uri: params.imageUri}} 
          style={{
            flex: 1,
            borderColor: 'red',
            width: width,
          }}
          resizeMode={'contain'}
        />
        <Text style={styles.bottomText}>
          {params.bottomText}
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topText: {
    margin: 20,
    fontSize: 22,
    fontWeight: 'bold'
  },
  bottomText: {
    margin: 20,
    fontSize: 18,
    fontStyle: 'italic'
  }
});