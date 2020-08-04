import React from 'react'
import { ScrollView, View } from 'react-native'
import { ScalableText } from '../../components/ScalableText'

export const Description = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <ScalableText type="b">Заголовок</ScalableText>
      <ScalableText color="#505050" style={{ marginTop: 16 }}>
        Описание, что для откачки и хранения используют тару, которая не имеет
        постороннего запаха
      </ScalableText>

      <View
        style={{
          height: 180,
          backgroundColor: '#C4C4C4',
          marginTop: 16,
        }}
      />

      <ScalableText type="b" style={{ marginTop: 50 }}>
        Заголовок
      </ScalableText>
      <ScalableText color="#505050" style={{ marginTop: 16 }}>
        Описание, что для откачки и хранения используют тару, которая не имеет
        постороннего запаха
      </ScalableText>

      <View
        style={{
          height: 180,
          backgroundColor: '#C4C4C4',
          marginTop: 16,
        }}
      />
    </ScrollView>
  )
}
