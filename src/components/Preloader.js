import React, { useRef, useEffect } from 'react'
import { View, Image, Easing, Animated } from 'react-native'
import { TextC } from './TextC'

import preloaderImage from '../assets/images/preloader-image.jpg'
import preloaderLogo from '../assets/images/preloader-logo.png'

const IMAGE = {}

const TEXT = {
  fontSize: 24,
  backgroundColor: '#fff',
}

const LOADING_LINE = {
  width: 300,
  height: 1,
  borderBottomWidth: 2,
  borderBottomColor: '#d2ddf0',
}

const LOGO = {}

const LOADING_THUMB = {
  width: 50,
  height: 1,
  borderBottomWidth: 2,
  borderBottomColor: '#447FE3',
}

export const Preloader = () => {
  const thumbAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(thumbAnim, {
        toValue: 250,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingTop: 80,
        paddingBottom: 20,
      }}
    >
      <TextC style={TEXT} type="b" color="gray">
        Народные ремесла
      </TextC>
      <Image source={preloaderImage} style={IMAGE} />
      <View style={LOADING_LINE}>
        <Animated.View
          style={[
            LOADING_THUMB,
            {
              transform: [
                {
                  translateX: thumbAnim,
                },
              ],
            },
          ]}
        />
      </View>
      <Image source={preloaderLogo} style={LOGO} />
    </View>
  )
}
