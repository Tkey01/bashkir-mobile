import React from 'react'
import { ScrollView, Image, View, TouchableOpacity } from 'react-native'

import { TextM } from '../components/TextM'
import { TextR } from '../components/TextR'
import { RadioButton } from '../components/RadioButton'
import { RangeInput } from '../components/RangeInput'

import themeIcon from '../assets/images/theme-icon.png'
import textSizeIcon from '../assets/images/text-size-icon.png'
import languagesIcon from '../assets/images/languages-icon.png'

const BLOCK = {
  paddingHorizontal: 10,
  paddingTop: 10,
  paddingBottom: 17,
}

const ROW = {
  flexDirection: 'row',
  alignItems: 'center',
}

const THEME_TITLE_TEXT = {}

export const Settings = () => {
  return (
    <ScrollView>
      <View style={BLOCK}>
        <View style={ROW}>
          <Image source={themeIcon} />
          <TextM style={THEME_TITLE_TEXT}>Тема</TextM>
        </View>
        <TouchableOpacity style={ROW}>
          <RadioButton />
          <TextR>Светлая</TextR>
        </TouchableOpacity>
        <TouchableOpacity style={ROW}>
          <RadioButton />
          <TextR>Тёмная</TextR>
        </TouchableOpacity>
        <TouchableOpacity style={ROW}>
          <RadioButton />
          <TextR>Автоматически</TextR>
        </TouchableOpacity>
      </View>
      <View style={[BLOCK, { marginTop: 8 }]}>
        <View style={ROW}>
          <Image source={textSizeIcon} />
          <TextM style={THEME_TITLE_TEXT}>Размер текста</TextM>
        </View>
        <RangeInput />
      </View>
      <View style={[BLOCK, { marginTop: 8 }]}>
        <View style={ROW}>
          <Image source={languagesIcon} />
          <TextM style={THEME_TITLE_TEXT}>Выбор языка</TextM>
        </View>
        <TouchableOpacity style={ROW}>
          <RadioButton />
          <TextR>Русский</TextR>
        </TouchableOpacity>
        <TouchableOpacity style={ROW}>
          <RadioButton />
          <TextR>Башкирский</TextR>
        </TouchableOpacity>
        <TouchableOpacity style={ROW}>
          <RadioButton />
          <TextR>Английский</TextR>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
