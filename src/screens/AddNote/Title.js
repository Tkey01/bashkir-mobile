import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import {
  TITLE_CONTAINER,
  ICON,
  ICON_ACTIVE_LIGHT,
  ICON_ACTIVE_DARK,
  TITLE_INPUT,
  TITLE_TEXT,
} from './styles'
import { IconC } from '../../components/IconC'
import { TextC } from '../../components/TextC'

export const Title = ({
  theme,
  currentTitle,
  setCurrentTitle,
  onPressTitleEdit,
  titleEditing,
  onBlurTitleInput,
}) => {
  return (
    <View style={TITLE_CONTAINER}>
      <TouchableOpacity onPress={onPressTitleEdit}>
        <IconC
          name="text"
          size={20}
          style={[
            ICON,
            titleEditing
              ? theme === 'light'
                ? ICON_ACTIVE_LIGHT
                : ICON_ACTIVE_DARK
              : null,
          ]}
        />
      </TouchableOpacity>
      {titleEditing ? (
        <TextInput
          value={currentTitle}
          onChangeText={setCurrentTitle}
          style={[
            TITLE_INPUT,
            {
              color: theme === 'light' ? '#505050' : '#fff',
            },
          ]}
          autoFocus={true}
          blurOnSubmit={true}
          onBlur={onBlurTitleInput}
        />
      ) : (
        <TextC color="gray" style={TITLE_TEXT}>
          {currentTitle}
        </TextC>
      )}
    </View>
  )
}
