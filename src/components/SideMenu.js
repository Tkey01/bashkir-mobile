import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import * as ACTIONS from '../redux/actions'
import { languages } from '../global/languages'
import { getLangText } from '../helpers/getLangText'
import { IconC } from './IconC'
import { TextC } from './TextC'
import { ScreenWrapper } from './ScreenWrapper'
import { RadioButton } from './RadioButton'

const list = [
  'Notes',
  'Favorites',
  'NormBase',
  'Settings',
  'About',
  'Terms',
  'PrivacyPolicy',
  'Feedback',
]
const langs = ['RUS', 'BASH', 'ENG']

const LANG = {
  paddingHorizontal: 5,
}

const ROW = {
  flexDirection: 'row',
  alignItems: 'center',
}

const LABEL_TEXT = {
  marginLeft: 15,
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

const THEME_CONTAINER = {
  marginTop: 30,
}

const THEME_PICKER_CONTAINER = {
  marginTop: 15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const SideMenuComponent = ({
  language,
  selectLanguage,
  navigation,
  setTheme,
  theme,
}) => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingTop: 20,
        paddingBottom: 50,
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
              {getLangText(
                languages.routes[item][language],
                `languages.routes.${item}.${language}`,
              )}
            </TextC>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => {}}>
          <TextC>
            {getLangText(
              languages.share[language],
              `languages.share.${language}`,
            )}
          </TextC>
        </TouchableOpacity>
      </View>
      <View style={DIVIDER_2} />
      <TextC>
        {getLangText(
          languages.settings.langText[language],
          `settings.langText.${language}`,
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
      <View style={THEME_CONTAINER}>
        <TextC>
          {getLangText(
            languages.settings.themeText[language],
            `settings.themeText.${language}`,
          )}
        </TextC>
        <View style={THEME_PICKER_CONTAINER}>
          <TouchableOpacity
            onPress={() => setTheme('light')}
            style={[ROW, { marginTop: 15 }]}
          >
            <RadioButton active={theme === 'light'} />
            <TextC style={LABEL_TEXT}>
              {getLangText(
                languages.settings.themeLight[language],
                `settings.themeLight.${language}`,
              )}
            </TextC>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTheme('dark')}
            style={[ROW, { marginTop: 15, marginLeft: 20 }]}
          >
            <RadioButton active={theme === 'dark'} />
            <TextC style={LABEL_TEXT}>
              {getLangText(
                languages.settings.themeDark[language],
                `settings.themeDark.${language}`,
              )}
            </TextC>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state) => ({
  language: state.language,
  theme: state.theme,
})
const mapDispatchToProps = {
  selectLanguage: ACTIONS.selectLanguage,
  setTheme: ACTIONS.setTheme,
}

export const SideMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenuComponent)
