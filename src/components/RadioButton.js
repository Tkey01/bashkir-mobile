import React from 'react'
import { View } from 'react-native'

const BORDER = {
  width: 18,
  height: 18,
  borderWidth: 1,
  borderColor: '#3269C8',
  borderRadius: 9,
}

const ACTIVE_CIRCLE = {
  position: 'absolute',
  left: 2,
  top: 2,
  width: 12,
  height: 12,
  backgroundColor: '#3269C8',
  borderRadius: 6,
}

export const RadioButton = ({ active }) => {
  return <View style={BORDER}>{active && <View style={ACTIVE_CIRCLE} />}</View>
}
