import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const VIEW = {
  height: 40,
}

const TEXT = {
  fontSize: 20,
}

export const Button = ({
  onPress,
  children,
  containerStyle,
  touchableStyle,
  textStyle,
}) => {
  return (
    <View style={VIEW}>
      <TouchableOpacity onPress={onPress}>
        <Text style={TEXT}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}
