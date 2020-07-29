import React from 'react'
import { View } from 'react-native'

import bortIcon from '../assets/images/bort-icon.png'
import shortIcon from '../assets/images/short-icon.png'
import voilIcon from '../assets/images/voil-icon.png'
import textileIcon from '../assets/images/textile-icon.png'
import woodIcon from '../assets/images/wood-icon.png'
import berestIcon from '../assets/images/berest-icon.png'
import { ListItem } from '../components/ListItem'

const VIEW = {
  marginTop: 24,
  paddingHorizontal: 20,
}

const PAGES = [
  {
    title: 'Бортничество',
    icon: bortIcon,
    screenName: 'Bort',
    isFavor: true,
  },
  {
    title: 'Шорничество',
    icon: shortIcon,
    screenName: 'Short',
    isFavor: false,
  },
  {
    title: 'Изготовление войлочных \n изделий',
    icon: voilIcon,
    screenName: 'Voil',
    isFavor: false,
  },
  {
    title: 'Изготовление текстильных \n изделий',
    icon: textileIcon,
    screenName: 'Textile',
    isFavor: false,
  },
  {
    title: 'Резьба по дереву',
    icon: woodIcon,
    screenName: 'Wood',
    isFavor: false,
  },
  {
    title: 'Резьба по бересте',
    icon: berestIcon,
    screenName: 'Berest',
    isFavor: false,
  },
]

export const Main = ({ navigation }) => {
  return (
    <View style={VIEW}>
      {PAGES.map((page, index) => (
        <ListItem
          key={index}
          text={page.title}
          icon={page.icon}
          isFavor={page.isFavor}
          onPressChevron={() => navigation.navigate(page.screenName)}
          onPressFavor={() => {}}
        />
      ))}
    </View>
  )
}
