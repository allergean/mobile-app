import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

export default class ScanBarcodeScreen extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      showCamera: true
    };
  }

  render() {
    let camera;
    if (this.state.showCamera) {
      camera =
        (<View style={{flex: 5}}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            onBarCodeRead={this.barcodeRead.bind(this)}>
          </Camera>
        </View>);
    } else {
      camera =
        (<View style={{flex: 5, alignItems: 'center'}}>
          <Text style={{color:'white'}}>Barcode found</Text>
        </View>);
    }

    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{color:'white'}}>Allergean</Text>
        </View>
        {camera}
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{color:'white'}}>Scanning barcode</Text>
        </View>
      </View>
    );
  }

  barcodeRead(data) {
    this.setState({showCamera: false});
    this.props.navigator.push({
      name: 'SearchScreen',
      data: data
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
});
