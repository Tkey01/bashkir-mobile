import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const colors = [
  '#a83232',
  '#a87532',
  '#87a832',
  '#3ca832',
  '#32a87f',
  '#327fa8',
  '#5032a8',
  '#9c32a8',
  '#505050',
]

const CONTAINER = {
  width: 202,
  padding: 20,
  borderWidth: 1,
  borderColor: '#bebebe',
  flexDirection: 'row',
  flexWrap: 'wrap',
}

const BLOCK = {
  width: 40,
  height: 40,
}

export const ColorPicker = ({ onChange, style }) => {
  return (
    <View style={CONTAINER}>
      {colors.map((color, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              BLOCK,
              (index + 1) % 3 > 0 ? { marginRight: 20 } : null,
              Math.floor(index / 3) < 2 ? { marginBottom: 20 } : null,
              { backgroundColor: color },
            ]}
            onPress={() => onChange(color)}
          />
        )
      })}
    </View>
  )
}
