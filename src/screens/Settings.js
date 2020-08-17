import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import * as ACTIONS from '../redux/actions'
import { TextC } from '../components/TextC'
import { RadioButton } from '../components/RadioButton'
import { RangeInput } from '../components/RangeInput'

import themeIcon from '../assets/images/theme-icon.png'
import textSizeIcon from '../assets/images/text-size-icon.png'
import languagesIcon from '../assets/images/languages-icon.png'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { getLangText } from '../helpers/getLangText'
import { languages } from '../global/languages'

const BLOCK = {
  paddingHorizontal: 10,
  paddingTop: 10,
  paddingBottom: 17,
}

const ROW = {
  flexDirection: 'row',
  alignItems: 'center',
}

const TITLE = {
  marginLeft: 20,
}

const LABEL_TEXT = {
  marginLeft: 31,
}

export const SettingsComponent = ({
  theme,
  lang,
  setTheme,
  selectLanguage,
}) => {
  return (
    <ScreenWrapper contentContainerStyle={{ paddingHorizontal: 16 }}>
      <View style={BLOCK}>
        <View style={ROW}>
          <Image source={themeIcon} />
          <TextC type="m" style={TITLE}>
            {getLangText(
              languages.settings.themeText[lang],
              `settings.themeText.${lang}`,
            )}
          </TextC>
        </View>
        <TouchableOpacity
          onPress={() => setTheme('light')}
          style={[ROW, { marginTop: 15, paddingHorizontal: 21 }]}
        >
          <RadioButton active={theme === 'light'} />
          <TextC style={LABEL_TEXT}>
            {getLangText(
              languages.settings.themeLight[lang],
              `settings.themeLight.${lang}`,
            )}
          </TextC>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTheme('dark')}
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton active={theme === 'dark'} />
          <TextC style={LABEL_TEXT}>
            {getLangText(
              languages.settings.themeDark[lang],
              `settings.themeDark.${lang}`,
            )}
          </TextC>
        </TouchableOpacity>
      </View>
      <View style={[BLOCK, { marginTop: 8 }]}>
        <View style={ROW}>
          <Image source={textSizeIcon} />
          <TextC type="m" style={TITLE}>
            {getLangText(
              languages.settings.textSize[lang],
              `settings.textSize.${lang}`,
            )}
          </TextC>
        </View>
        <RangeInput />
      </View>
      <View style={[BLOCK, { marginTop: 8 }]}>
        <View style={ROW}>
          <Image source={languagesIcon} />
          <TextC type="m" style={TITLE}>
            {getLangText(
              languages.settings.changeLangText[lang],
              `settings.changeLangText.${lang}`,
            )}
          </TextC>
        </View>
        <TouchableOpacity
          onPress={() => selectLanguage('rus')}
          style={[ROW, { marginTop: 15, paddingHorizontal: 21 }]}
        >
          <RadioButton active={lang === 'rus'} />
          <TextC style={LABEL_TEXT}>
            {getLangText(
              languages.settings.langRus[lang],
              `settings.langRus.${lang}`,
            )}
          </TextC>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => selectLanguage('bash')}
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton active={lang === 'bash'} />
          <TextC style={LABEL_TEXT}>
            {getLangText(
              languages.settings.langBash[lang],
              `settings.langBash.${lang}`,
            )}
          </TextC>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => selectLanguage('eng')}
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton active={lang === 'eng'} />
          <TextC style={LABEL_TEXT}>
            {getLangText(
              languages.settings.langEng[lang],
              `settings.langEng.${lang}`,
            )}
          </TextC>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme,
  lang: state.language,
})

const mapDispatchToProps = {
  setTheme: ACTIONS.setTheme,
  selectLanguage: ACTIONS.selectLanguage,
}

export const Settings = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsComponent)
