import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, StyleSheet, ListView, TouchableHighlight } from 'react-native';

import CheckBox from './../components/CheckBox'

export default class SelectAllergens extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this._onCheckBoxPressed = this._onCheckBoxPressed.bind(this);
    this.state = {
      data: {id: 1, description: "Alergie 1"}
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: {id: 1, description: "Alergie 1"}
    })
  }

  _onCheckBoxPressed() {
    var data = this.state.data;
    this.setState({
      data: data
    });
  }

  render() {

    fetch('https://private-be4cb-allergean.apiary-mock.com/allergens')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.forceUpdate();
      })
      .catch((error) => {
        console.error(error);
      });

    let data = this.state.data;

    return (
      <View style={styles.container}>
        <Text>Please select your allergens.</Text>
        <TouchableHighlight underlayColor={'#eee'} style={{paddingTop: 6, paddingBottom: 6, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox data={data} onCheckBoxPressed={this._onCheckBoxPressed}></CheckBox>
            <Text style={{fontSize:18}}>{data.description}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
