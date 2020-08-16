import React, { useRef } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'
import { IconC } from './IconC'

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    height: 200,
    backgroundColor: 'white',
  },
})

const CONTAINER = {
  height: 200,
  borderWidth: 1,
  borderColor: '#bebebe',
}

const SAVE_BUTTON = {
  position: 'absolute',
  right: 10,
  top: 10,
}

export const Drawer = ({ onSave, color = '#505050' }) => {
  const sketch = useRef(null)

  const onPressSave = () => {
    sketch.current.getBase64('png', true, false, false, false, onSave)
  }

  return (
    <View style={CONTAINER}>
      <SketchCanvas
        ref={sketch}
        style={styles.canvas}
        strokeColor={color}
        strokeWidth={7}
      />
      <TouchableOpacity style={SAVE_BUTTON} onPress={onPressSave}>
        <IconC name="save" size={20} color="blueMain" />
      </TouchableOpacity>
    </View>
  )
}
