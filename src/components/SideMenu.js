import React from 'react'
import { View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome5Pro'

import { TextR } from './TextR'
import * as ACTIONS from '../redux/actions'
import { languages } from '../global/languages'

const list = ['Notes', 'Favorites', 'NormBase', 'Settings', 'About']

const langs = ['RUS', 'BASH', 'ENG']

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
  borderBottomWidth: 1,
  borderColor: '#3269C8',
  marginTop: 24,
  marginBottom: 62,
}

const DIVIDER_2 = {
  borderBottomWidth: 1,
  borderColor: '#3269C8',
  marginTop: 60,
  marginBottom: 24,
}

const LANG_CONTAINER = {
  marginTop: 32,
  flexDirection: 'row',
}

console.log(Dimensions.get('screen').width, Dimensions.get('screen').height)
console.log(Dimensions.get('window').width, Dimensions.get('window').height)

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
            onPress={() => navigation.navigate(item)}
          >
            <TextR>{languages.sideMenu.routes[language][index]}</TextR>
          </TouchableOpacity>
        ))}
      </View>
      <View style={DIVIDER_2} />
      <TextR>Язык</TextR>
      <View style={LANG_CONTAINER}>
        {langs.map((lang, index) => (
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
                borderColor: '#3269C8',
                borderBottomWidth: language === lang.toLowerCase() ? 1 : 0,
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
