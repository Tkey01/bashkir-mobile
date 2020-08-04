import React from 'react'
import { View, ScrollView } from 'react-native'

import materialsIcon from '../../assets/images/materials-icon.png'
import toolsIcon from '../../assets/images/tools-icon.png'
import techIcon from '../../assets/images/technology-icon.png'
import videoIcon from '../../assets/images/video-icon.png'
import audioIcon from '../../assets/images/audio-icon.png'
import descIcon from '../../assets/images/desc-icon.png'
import sourcesIcon from '../../assets/images/sources-icon.png'

import { ListItem } from '../../components/ListItem'
import { ScalableText } from '../../components/ScalableText'

const PAGES = [
  {
    title: 'Описание',
    icon: descIcon,
    screenName: 'BortDescription',
    isFavor: true,
  },
  {
    title: 'Инструменты',
    icon: toolsIcon,
    screenName: 'BortTools',
    isFavor: false,
  },
  {
    title: 'Материалы',
    icon: materialsIcon,
    screenName: 'BortDescription',
    isFavor: false,
  },
  {
    title: 'Технология',
    icon: techIcon,
    screenName: 'BortTech',
    isFavor: false,
  },
  {
    title: 'Видео',
    icon: videoIcon,
    screenName: 'BortVideo',
    isFavor: false,
  },
  {
    title: 'Использованные источники',
    icon: sourcesIcon,
    screenName: 'BortSources',
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
