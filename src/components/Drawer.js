import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'

import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    height: 400,
    backgroundColor: 'white',
  },
})

const CONTAINER = {
  flex: 1,
  backgroundColor: 'red',
  borderWidth: 1,
  borderColor: 'red',
}

export class Drawer extends Component {
  render() {
    return (
      <View style={CONTAINER}>
        <SketchCanvas
          ref={(ref) => (this._canvas = ref)}
          style={styles.canvas}
          strokeColor={'black'}
          strokeWidth={7}
          onStrokeStart={this.onStrokeStart}
        />
      </View>
    )
  }
}
