import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/FontAwesome5Pro'

import materialsIcon from '../assets/images/materials-icon.png'
import toolsIcon from '../assets/images/tools-icon.png'
import techIcon from '../assets/images/technology-icon.png'
import videoIcon from '../assets/images/video-icon.png'
import audioIcon from '../assets/images/audio-icon.png'

import { ListItem } from '../components/ListItem'
import { TextR } from '../components/TextR'
import { useTheme } from '../components/ThemeProvider'

const PAGES = [
  {
    title: 'Необходимые материалы',
    icon: materialsIcon,
    screenName: 'Bort',
    isFavor: true,
  },
  {
    title: 'Необходимые инструменты',
    icon: toolsIcon,
    screenName: 'Short',
    isFavor: false,
  },
  {
    title: 'Технология',
    icon: techIcon,
    screenName: 'Voil',
    isFavor: false,
  },
  {
    title: 'Смотреть видео',
    icon: videoIcon,
    screenName: 'Textile',
    isFavor: false,
  },
  {
    title: 'Слушать аудио',
    icon: audioIcon,
    screenName: 'Wood',
    isFavor: false,
  },
]

export const Bort = ({ navigation }) => {
  const { toggle: toggleTheme } = useTheme()

  return (
    <ScrollView
      style={{
        paddingVertical: 46,
        paddingHorizontal: 18,
      }}
    >
      <TouchableOpacity onPress={toggleTheme}>
        <TextR>123</TextR>
      </TouchableOpacity>
      <Icon2 name="bookmark" color="#333" size={50} />
      <TextR
        style={{
          fontSize: 14,
          color: '#505050',
        }}
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </TextR>
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
            onPressChevron={() => navigation.navigate(page.screenName)}
            onPressFavor={() => {}}
          />
        ))}
      </View>
    </ScrollView>
  )
}
