import React from 'react'
import { Drawer } from '../../components/Drawer'
import { Image } from 'react-native'
import { TextC } from '../../components/TextC'
import { CONTENT_TEXT, CONTENT_IMAGE } from './styles'

export const Elem = ({ elem, onSave, color }) => {
  if (elem.type === 'text') {
    return <TextC style={CONTENT_TEXT}>{elem.content}</TextC>
  } else if (elem.type === 'image') {
    return (
      <Image
        style={CONTENT_IMAGE}
        resizeMode="contain"
        source={{ uri: elem.content }}
      />
    )
  } else if (elem.type === 'drawer') {
    return <Drawer onSave={onSave} color={color} />
  }
}
