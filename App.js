import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
//left max = 370
//top max = 590
var x= .5;
var y= .5;
var z= .3;

var valTop= ((y*100)*590)/100;
var valLeft= ((x*100)*370)/100;

var valW= ((z*100)*370)/100;
var valH= ((z*100)*590)/100;
export default class AlignItems extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}></View>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: .5,
    flexDirection: 'row'
  },
  box1: {
    position: 'relative',
    backgroundColor: 'red',
    top: valTop,
    left: valLeft,
    width: valW,
    height: valH
  }
});