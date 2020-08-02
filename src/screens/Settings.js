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

const TITLE = {
  marginLeft: 20,
}

const LABEL_TEXT = {
  marginLeft: 31,
}

export const Settings = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
      <View style={BLOCK}>
        <View style={ROW}>
          <Image source={themeIcon} />
          <TextM style={TITLE}>Тема</TextM>
        </View>
        <TouchableOpacity
          style={[ROW, { marginTop: 15, paddingHorizontal: 21 }]}
        >
          <RadioButton active />
          <TextR style={LABEL_TEXT}>Светлая</TextR>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton />
          <TextR style={LABEL_TEXT}>Тёмная</TextR>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton />
          <TextR style={LABEL_TEXT}>Автоматически</TextR>
        </TouchableOpacity>
      </View>
      <View style={[BLOCK, { marginTop: 8 }]}>
        <View style={ROW}>
          <Image source={textSizeIcon} />
          <TextM style={TITLE}>Размер текста</TextM>
        </View>
        <RangeInput />
      </View>
      <View style={[BLOCK, { marginTop: 8 }]}>
        <View style={ROW}>
          <Image source={languagesIcon} />
          <TextM style={TITLE}>Выбор языка</TextM>
        </View>
        <TouchableOpacity
          style={[ROW, { marginTop: 15, paddingHorizontal: 21 }]}
        >
          <RadioButton />
          <TextR style={LABEL_TEXT}>Русский</TextR>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton />
          <TextR style={LABEL_TEXT}>Башкирский</TextR>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton />
          <TextR style={LABEL_TEXT}>Английский</TextR>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
