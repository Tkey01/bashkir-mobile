import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import * as ACTIONS from '../redux/actions'
import { languages } from '../global/languages'
import { getLangText } from '../helpers/getLangText'
import { IconC } from './IconC'
import { TextC } from './TextC'
import { ScreenWrapper } from './ScreenWrapper'

const list = ['Notes', 'Favorites', 'NormBase', 'Settings', 'About']

const langs = ['RUS', 'BASH', 'ENG']

const LANG = {
  paddingHorizontal: 5,
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

const SideMenuComponent = ({ language, selectLanguage, navigation }) => {
  return (
    <ScreenWrapper
      style={{
        paddingVertical: 20,
        paddingHorizontal: 25,
      }}
    >
      <TouchableOpacity
        style={CLOSE_CONTAINER}
        onPress={navigation.closeDrawer}
      >
        <TextC>
          {getLangText(
            languages.sideMenu.close[language],
            `sideMenu.close.${language}`,
          )}
        </TextC>
        <IconC
          size={20}
          name="times"
          light
          color="gray"
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
            <TextC>
              {
                getLangText(
                  languages.sideMenu.routes[language],
                  `sideMenu.routes.${language}`,
                )[index]
              }
            </TextC>
          </TouchableOpacity>
        ))}
      </View>
      <View style={DIVIDER_2} />
      <TextC>
        {getLangText(
          languages.sideMenu.lang[language],
          `sideMenu.lang.${language}`,
        )}
      </TextC>
      <View style={LANG_CONTAINER}>
        {langs.map((lang, index) => (
          <TouchableOpacity
            key={index}
            style={{ marginLeft: 20 }}
            onPress={() => selectLanguage(lang.toLowerCase())}
          >
            <TextC
              type={language === lang.toLowerCase() ? 'b' : 'r'}
              style={LANG}
            >
              {lang}
            </TextC>
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
    </ScreenWrapper>
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
