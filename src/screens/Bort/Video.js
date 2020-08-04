import React from 'react'
import { ScrollView } from 'react-native'
import { VideoComp } from './VideoComp'

import { ScalableText } from '../../components/ScalableText'

export const Video = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 46,
      }}
    >
      <ScalableText style={{ paddingHorizontal: 16 }} type="b">
        Заголовок
      </ScalableText>
      <ScalableText
        color="#505050"
        style={{ marginTop: 16, paddingHorizontal: 16 }}
      >
        Описание, что для откачки и хранения используют тару, которая не имеет
        постороннего запаха
      </ScalableText>
      <VideoComp style={{ marginTop: 20 }} />
    </ScrollView>
  )
}
