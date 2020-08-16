import React from 'react'
import { View, TouchableOpacity } from 'react-native'

const colors = [
  '#a83232',
  '#a87532',
  '#d6cc3a',
  '#87a832',
  '#3ca832',
  '#32a87f',
  '#327fa8',
  '#4f42e3',
  '#5032a8',
  '#9c32a8',
  '#505050',
  '#e3e3e3',
]

const CONTAINER = {
  width: 262,
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
              (index + 1) % 4 > 0 ? { marginRight: 20 } : null,
              Math.floor(index / 4) < 2 ? { marginBottom: 20 } : null,
              { backgroundColor: color },
            ]}
            onPress={() => onChange(color)}
          />
        )
      })}
    </View>
  )
}
