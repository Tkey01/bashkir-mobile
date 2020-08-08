import React from 'react'
import { View, ScrollView } from 'react-native'

import materialsIcon from '../../assets/images/materials-icon.png'
import toolsIcon from '../../assets/images/tools-icon.png'
import techIcon from '../../assets/images/technology-icon.png'
// import videoIcon from '../../assets/images/video-icon.png'
import descIcon from '../../assets/images/desc-icon.png'
import sourcesIcon from '../../assets/images/sources-icon.png'

import { ListItem } from '../../components/ListItem'

const PAGES = [
  {
    title: 'Описание',
    icon: descIcon,
    screenName: 'BerestDescription',
    isFavor: true,
  },
  {
    title: 'Инструменты',
    icon: toolsIcon,
    screenName: 'BerestTools',
    isFavor: false,
  },
  {
    title: 'Материалы',
    icon: materialsIcon,
    screenName: 'BerestStuff',
    isFavor: false,
  },
  {
    title: 'Технология',
    icon: techIcon,
    screenName: 'BerestTech',
    isFavor: false,
  },
  // {
  //   title: 'Видео',
  //   icon: videoIcon,
  //   screenName: 'BerestVideo',
  //   isFavor: false,
  // },
  {
    title: 'Использованные источники',
    icon: sourcesIcon,
    screenName: 'BerestSources',
    isFavor: false,
  },
]

export const Main = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          marginTop: 40,
        }}
      >
        {PAGES.map((page, index) => (
          <ListItem
            key={index}
            text={page.title}
            icon={page.icon}
            isFavor={page.isFavor}
            onPress={() => navigation.navigate(page.screenName)}
            onPressFavor={() => {}}
          />
        ))}
      </View>
    </ScrollView>
  )
}
