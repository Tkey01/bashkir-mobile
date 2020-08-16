import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ICON, ICON_ACTIVE_LIGHT, ICON_ACTIVE_DARK } from './styles'
import { IconC } from '../../components/IconC'

const CONTROLLERS_CONTAINER = {
  padding: 10,
  justifyContent: 'space-between',
  flexDirection: 'row',
  borderColor: '#3269C8',
  borderRadius: 8,
  borderWidth: 1,
}

export const Controllers = ({
  theme,
  favorites,
  route,
  actionType,
  colorEditing,
  attachDrawingImage,
  saveNote,
  onPressPalette,
  attachImage,
  onPressFavor,
}) => {
  return (
    <View style={CONTROLLERS_CONTAINER}>
      {/* <IconC name="pencil" size={20} style={ICON} /> */}
      <TouchableOpacity onPress={attachDrawingImage}>
        <IconC
          name="wave-sine"
          size={20}
          style={[
            ICON,
            actionType === 'draw'
              ? theme === 'light'
                ? ICON_ACTIVE_LIGHT
                : ICON_ACTIVE_DARK
              : null,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={saveNote}>
        <IconC name="save" size={20} style={ICON} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressPalette}>
        <IconC
          name="palette"
          size={20}
          style={[
            ICON,
            colorEditing
              ? theme === 'light'
                ? ICON_ACTIVE_LIGHT
                : ICON_ACTIVE_DARK
              : null,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={attachImage}>
        <IconC
          name="paperclip"
          size={20}
          style={[
            ICON,
            actionType === 'attach-image'
              ? theme === 'light'
                ? ICON_ACTIVE_LIGHT
                : ICON_ACTIVE_DARK
              : null,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressFavor}>
        <IconC
          name="bookmark"
          size={20}
          style={ICON}
          solid={favorites[route.name]}
        />
      </TouchableOpacity>
    </View>
  )
}
