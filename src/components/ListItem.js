import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import { TextC } from '../components/TextC'
import { IconC } from '../components/IconC'

const CONTAINER = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 60,
  paddingHorizontal: 10,
  marginBottom: 8,
}

const TEXT = {
  marginLeft: 20,
}

const ICON = {
  width: 40,
  height: 40,
}

const VIEW1 = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
}

const VIEW2 = {
  flexDirection: 'row',
  alignItems: 'center',
}

const BUTTON = {
  width: 30,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 25,
}

export const ListItem = ({
  text,
  icon,
  isFavor,
  onPressFavor,
  onPress,
  onPressClose,
  onPressSave,
}) => {
  return (
    <TouchableOpacity style={CONTAINER} onPress={onPress}>
      <View style={VIEW1}>
        <Image source={icon} style={ICON} />
        <TextC style={TEXT}>{text}</TextC>
      </View>
      <View style={VIEW2}>
        {onPressClose && (
          <TouchableOpacity style={BUTTON} onPress={onPressClose}>
            <IconC size={25} name="times" light color="blue" />
          </TouchableOpacity>
        )}
        {onPressFavor && (
          <TouchableOpacity style={BUTTON} onPress={onPressFavor}>
            <IconC
              size={19}
              name="bookmark"
              solid={isFavor}
              light={!isFavor}
              color="blue"
            />
          </TouchableOpacity>
        )}
        {onPressSave && (
          <TouchableOpacity style={BUTTON} onPress={onPressSave}>
            <IconC size={20} name="download" light color="blue" />
          </TouchableOpacity>
        )}
        {!onPressSave && (
          <TouchableOpacity style={BUTTON}>
            <IconC size={24} name="chevron-right" light color="blue" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  )
}
