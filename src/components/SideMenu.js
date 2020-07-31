import React from 'react'
import { View, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5Pro'

import { TextR } from './TextR'

const list = [
  'Заметки',
  'Избранное',
  'Нормативная база',
  'Настройки',
  'О приложении',
]

const languages = {
  RUS: true,
  BASH: false,
  ENG: false,
}

const LANG = {
  paddingHorizontal: 5,
}

const LANG_ACTIVE = {
  fontFamily: 'Roboto-Bold',
}

export const SideMenu = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        paddingVertical: 20,
        paddingHorizontal: 25,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-end',
        }}
        onPress={navigation.closeDrawer}
      >
        <TextR style={{ fontSize: 14 }}>Закрыть</TextR>
        <Icon
          size={20}
          name="times"
          light
          color="#565656"
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
      <View style={{ height: 1, backgroundColor: '#3269C8', marginTop: 24 }} />
      <View style={{ marginTop: 62 }}>
        {list.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{ marginTop: index ? 30 : 0 }}
            onPress={() => navigation.navigate('Settings')}
          >
            <TextR>{item}</TextR>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ height: 1, backgroundColor: '#3269C8', marginTop: 60 }} />
      <TextR style={{ marginTop: 24 }}>Язык</TextR>
      <View style={{ marginTop: 32, flexDirection: 'row' }}>
        {Object.keys(languages).map((lang, index) => (
          <TouchableOpacity key={index} style={{ marginLeft: 20 }}>
            <TextR style={[LANG, languages[lang] ? LANG_ACTIVE : null]}>
              {lang}
            </TextR>
            <View
              style={{
                height: languages[lang] ? 1 : 0,
                backgroundColor: '#3269C8',
                marginHorizontal: -5,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}
