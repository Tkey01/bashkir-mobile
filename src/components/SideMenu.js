import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome5Pro'

import { TextR } from './TextR'
import * as ACTIONS from '../redux/actions'

const list = [
  'Заметки',
  'Избранное',
  'Нормативная база',
  'Настройки',
  'О приложении',
]

const languages = ['RUS', 'BASH', 'ENG']

const LANG = {
  paddingHorizontal: 5,
}

const LANG_ACTIVE = {
  fontFamily: 'Roboto-Bold',
}

const CLOSE_CONTAINER = {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'flex-end',
}

const DIVIDER_1 = {
  height: 1,
  backgroundColor: '#3269C8',
  marginTop: 24,
  marginBottom: 62,
}

const DIVIDER_2 = {
  height: 1,
  backgroundColor: '#3269C8',
  marginTop: 60,
  marginBottom: 24,
}

const LANG_CONTAINER = {
  marginTop: 32,
  flexDirection: 'row',
}

const SideMenuComponent = ({ language, selectLanguage, navigation }) => {
  return (
    <ScrollView
      style={{
        paddingVertical: 20,
        paddingHorizontal: 25,
      }}
    >
      <TouchableOpacity
        style={CLOSE_CONTAINER}
        onPress={navigation.closeDrawer}
      >
        <TextR>Закрыть</TextR>
        <Icon
          size={20}
          name="times"
          light
          color="#565656"
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
      <View style={DIVIDER_1} />
      <View>
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
      <View style={DIVIDER_2} />
      <TextR>Язык</TextR>
      <View style={LANG_CONTAINER}>
        {languages.map((lang, index) => (
          <TouchableOpacity
            key={index}
            style={{ marginLeft: 20 }}
            onPress={() => selectLanguage(lang.toLowerCase())}
          >
            <TextR
              style={[
                LANG,
                language === lang.toLowerCase() ? LANG_ACTIVE : null,
              ]}
            >
              {lang}
            </TextR>
            <View
              style={{
                height: language === lang.toLowerCase() ? 1 : 0,
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

const mapStateToProps = (state) => ({
  language: state.language,
})
const mapDispatchToProps = {
  selectLanguage: ACTIONS.selectLanguage,
}

export const SideMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenuComponent)
