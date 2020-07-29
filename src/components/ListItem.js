import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import { TextR } from '../components/TextR'
import favoritesThin from '../assets/images/favorites-thin.png'
import favoritesThinFullfilled from '../assets/images/favorites-thin-fullfiled.png'
import chevronRightBlue from '../assets/images/chevron-right-blue.png'

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

const FAVOR_IMG = {
  width: 14,
  height: 20,
}

const CHEVRON_RIGHT = {
  marginLeft: 20,
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
          <Image
            style={FAVOR_IMG}
            source={isFavor ? favoritesThinFullfilled : favoritesThin}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressChevron}>
          <Image style={CHEVRON_RIGHT} source={chevronRightBlue} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
