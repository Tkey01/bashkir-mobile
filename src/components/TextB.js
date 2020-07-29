import React from 'react'
import { Text } from 'react-native'

const TEXT = {
  fontFamily: 'Roboto-Bold',
}

export const TextB = ({ style, children }) => {
  return <Text style={[TEXT, style]}>{children}</Text>
}
