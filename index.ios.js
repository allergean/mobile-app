/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator, NavigatorIOS, Text, TouchableHighlight, View } from 'react-native';

import HomeScreen from './app/scenes/HomeScreen';
import SelectAllergensScreen from './app/scenes/SelectAllergensScreen';
import ScanBarcodeScreen from './app/scenes/ScanBarcodeScreen';
import SearchScreen from './app/scenes/SearchScreen';

export default class Allergean extends Component {
  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'HomeScreen' }}
        renderScene={ this.renderScene }
      />
    )
  }

  renderScene(route, navigator) {
    if (route.name == 'HomeScreen') {
      return (
        <HomeScreen navigator={navigator}/>
      )
    }
    if (route.name == 'SelectAllergensScreen') {
      return (
        <SelectAllergensScreen navigator={navigator}/>
      )
    }
    if (route.name == 'ScanBarcodeScreen') {
      return (
        <ScanBarcodeScreen navigator={navigator}/>
      )
    }
    if (route.name == 'SearchScreen') {
      return (
        <SearchScreen navigator={navigator} data={route.data}/>
      )
    }
  }
}

AppRegistry.registerComponent('Allergean', () => Allergean);
