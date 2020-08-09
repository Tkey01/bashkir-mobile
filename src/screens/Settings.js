import React from 'react'
import { ScrollView, Image, View, TouchableOpacity } from 'react-native'

import { TextC } from '../components/TextC'
import { RadioButton } from '../components/RadioButton'
import { RangeInput } from '../components/RangeInput'

import themeIcon from '../assets/images/theme-icon.png'
import textSizeIcon from '../assets/images/text-size-icon.png'
import languagesIcon from '../assets/images/languages-icon.png'
import { ScreenWrapper } from '../components/ScreenWrapper'

const BLOCK = {
  paddingHorizontal: 10,
  paddingTop: 10,
  paddingBottom: 17,
  // borderWidth: 1,
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
    <ScreenWrapper contentContainerStyle={{ paddingHorizontal: 16 }}>
      <View style={BLOCK}>
        <View style={ROW}>
          <Image source={themeIcon} />
          <TextC type="m" style={TITLE}>
            Тема
          </TextC>
        </View>
        <TouchableOpacity
          style={[ROW, { marginTop: 15, paddingHorizontal: 21 }]}
        >
          <RadioButton active />
          <TextC style={LABEL_TEXT}>Светлая</TextC>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton />
          <TextC style={LABEL_TEXT}>Тёмная</TextC>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton />
          <TextC style={LABEL_TEXT}>Автоматически</TextC>
        </TouchableOpacity>
      </View>
      <View style={[BLOCK, { marginTop: 8 }]}>
        <View style={ROW}>
          <Image source={textSizeIcon} />
          <TextC type="m" style={TITLE}>
            Размер текста
          </TextC>
        </View>
        <RangeInput />
      </View>
      <View style={[BLOCK, { marginTop: 8 }]}>
        <View style={ROW}>
          <Image source={languagesIcon} />
          <TextC type="m" style={TITLE}>
            Выбор языка
          </TextC>
        </View>
        <TouchableOpacity
          style={[ROW, { marginTop: 15, paddingHorizontal: 21 }]}
        >
          <RadioButton active />
          <TextC style={LABEL_TEXT}>Русский</TextC>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton />
          <TextC style={LABEL_TEXT}>Башкирский</TextC>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ROW, { marginTop: 12, paddingHorizontal: 21 }]}
        >
          <RadioButton />
          <TextC style={LABEL_TEXT}>Английский</TextC>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}
