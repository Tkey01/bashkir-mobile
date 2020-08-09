import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5Pro'

import { TextR } from '../components/TextR'

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
        <TextR style={TEXT}>{text}</TextR>
      </View>
      <View style={VIEW}>
        {onPressFavor && (
          <TouchableOpacity onPress={onPressFavor}>
            <Icon
              size={19}
              name="bookmark"
              solid={isFavor}
              light={!isFavor}
              color="#3269C8"
            />
          </TouchableOpacity>
        )}
        {onPressClose && (
          <TouchableOpacity onPress={onPressClose}>
            <Icon
              size={25}
              name="times"
              light
              color="#3269C8"
              style={MARGIN_LEFT}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <Icon
            size={24}
            name="chevron-right"
            light
            color="#3269C8"
            style={MARGIN_LEFT}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
