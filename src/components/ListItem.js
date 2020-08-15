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

const VIEW = {
  flexDirection: 'row',
  alignItems: 'center',
}

const MARGIN_LEFT = {
  marginLeft: 25,
}

export const ListItem = ({
  text,
  icon,
  isFavor,
  onPressFavor,
  onPress,
  onPressClose,
}) => {
  return (
    <TouchableOpacity style={CONTAINER} onPress={onPress}>
      <View style={VIEW}>
        <Image source={icon} style={ICON} />
        <TextC style={TEXT}>{text}</TextC>
      </View>
      <View style={VIEW}>
        {onPressFavor && (
          <TouchableOpacity onPress={onPressFavor}>
            <IconC
              size={19}
              name="bookmark"
              solid={isFavor}
              light={!isFavor}
              color="blue"
            />
          </TouchableOpacity>
        )}
        {onPressClose && (
          <TouchableOpacity onPress={onPressClose}>
            <IconC
              size={25}
              name="times"
              light
              color="blue"
              style={MARGIN_LEFT}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <IconC
            size={24}
            name="chevron-right"
            light
            color="blue"
            style={MARGIN_LEFT}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
