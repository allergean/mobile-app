import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class HomeScreen extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  _onChooseAllergens() {
    this.props.navigator.push({
      name: 'SelectAllergensScreen',
    });
  }

  _onScanBarcode() {
    this.props.navigator.push({
      name: 'ScanBarcodeScreen',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <Text style={styles.welcome}>
            Welcome to Allergean!
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'skyblue', justifyContent: 'center' }}>
          <TouchableHighlight onPress={this._onChooseAllergens.bind(this)}>
            <Text style={styles.instructions}>Choose allergens</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1, backgroundColor: 'steelblue', justifyContent: 'center' }}>
          <TouchableHighlight onPress={this._onScanBarcode.bind(this)}>
            <Text style={styles.instructions}>Scan barcode</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    margin: 10,
    marginBottom: 20,
    color: 'black'
  },
  instructions: {
    fontSize: 25,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 5,
  },
});
