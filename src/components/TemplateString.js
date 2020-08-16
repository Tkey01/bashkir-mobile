import React, { useCallback } from 'react'

import { ScalableText } from './ScalableText'
import { TouchableOpacity, Linking } from 'react-native'

export const TemplateString = ({ children }) => {
  const openLink = useCallback((text) => {
    const link = text.slice(3)
    Linking.canOpenURL(link)
      .then((canOpen) => {
        if (canOpen) {
          Linking.openURL(link)
        } else {
          // eslint-disable-next-line quotes
          console.log(`Cant open url`, link)
        }
      })
      .catch((err) => console.log('Error while trying open url', err))
  }, [])
  return children.map((item, index) =>
    item.type === 'link' ? (
      <TouchableOpacity key={index} onPress={() => openLink(item.text)}>
        <ScalableText color="blue">{item.text}</ScalableText>
      </TouchableOpacity>
    ) : (
      <ScalableText
        key={index}
        color={item.type === 'bold' ? 'black' : 'gray'}
        type={item.type === 'bold' ? 'b' : 'r'}
      >
        {item.text}
      </ScalableText>
    ),
  )
}
