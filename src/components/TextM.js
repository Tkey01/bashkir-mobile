import React from 'react'
import { Text } from 'react-native'

const TEXT = {
  fontFamily: 'Roboto-Medium',
}

export const TextM = ({ style, children }) => {
  return <Text style={[TEXT, style]}>{children}</Text>
}
