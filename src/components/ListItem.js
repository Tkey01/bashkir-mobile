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

const VIEW = {
  flexDirection: 'row',
  alignItems: 'center',
}

const CHEVRON_RIGHT = {
  marginLeft: 25,
}

export const ListItem = ({
  text,
  icon,
  isFavor,
  onPressFavor,
  onPressChevron,
}) => {
  return (
    <View style={CONTAINER}>
      <View style={VIEW}>
        <Image source={icon} />
        <TextR style={TEXT}>{text}</TextR>
      </View>
      <View style={VIEW}>
        <TouchableOpacity onPress={onPressFavor}>
          <Icon
            size={19}
            name="bookmark"
            solid={isFavor}
            light={!isFavor}
            color="#3269C8"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressChevron}>
          <Icon
            size={24}
            name="chevron-right"
            light
            color="#3269C8"
            style={CHEVRON_RIGHT}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
