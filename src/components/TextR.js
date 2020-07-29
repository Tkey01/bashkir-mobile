import React from 'react'
import { Text } from 'react-native'

const TEXT = {
  fontFamily: 'Roboto-Regular',
}

export const TextR = ({ style, children }) => {
  return <Text style={[TEXT, style]}>{children}</Text>
}
