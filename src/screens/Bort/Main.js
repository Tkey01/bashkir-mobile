import React from 'react'
import { View, ScrollView } from 'react-native'

import materialsIcon from '../../assets/images/materials-icon.png'
import toolsIcon from '../../assets/images/tools-icon.png'
import techIcon from '../../assets/images/technology-icon.png'
import videoIcon from '../../assets/images/video-icon.png'
import audioIcon from '../../assets/images/audio-icon.png'

import { ListItem } from '../../components/ListItem'
import { ScalableText } from '../../components/ScalableText'

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
    screenName: 'Shor',
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

export const Main = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        paddingVertical: 46,
        paddingHorizontal: 18,
      }}
    >
      <ScalableText
        style={{
          fontSize: 14,
          color: '#505050',
        }}
      >
        Первый вопрос, который предстоит разрешить новичку в сфере пчеловодства
        – это выбор жилья для будущих питомцев. Для этого нужно изучить виды
        ульев, а также материалы, из которых их изготавливают.
      </ScalableText>
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
