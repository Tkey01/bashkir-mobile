import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { Linking, View } from 'react-native'

import { ScalableText } from '../components/ScalableText'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconC } from '../components/IconC'

const SOCIAL_CONTAINER = {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
}

const MARGIN = {
  marginTop: 10,
}

const renderContent = ({ lang }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const openLink = useCallback((link) => {
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

  switch (lang) {
    case 'bash':
      return (
        <View>
          <ScalableText style={MARGIN}>
            Беҙгә күрһәтелгән e-mail адресы буйынса яҙығыҙ: rkssentr@gmail.com
          </ScalableText>
          <ScalableText style={MARGIN}>
            Беҙҙең сайт:{' '}
            <ScalableText
              color="blue"
              onPress={() => openLink('https://rkssentr.ru')}
            >
              https://rkssentr.ru
            </ScalableText>
          </ScalableText>
          <ScalableText style={MARGIN}>Беҙ социаль селтәрҙәрҙә:</ScalableText>
          <View style={SOCIAL_CONTAINER}>
            <TouchableOpacity
              onPress={() => openLink('https://vk.com/rkssentr')}
            >
              <IconC size={25} name="vk" light color="blue" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openLink('https://instagram.com/rks.sentr?igshid=1i0u42gi7mci2')
              }
              style={{ marginLeft: 15 }}
            >
              <IconC size={25} name="instagram" light color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      )

    case 'eng':
      return (
        <View>
          <ScalableText style={MARGIN}>
            Please contact us at e-mail: rkssentr@gmail.com
          </ScalableText>
          <ScalableText style={MARGIN}>
            Our website:{' '}
            <ScalableText
              color="blue"
              onPress={() => openLink('https://rkssentr.ru')}
            >
              https://rkssentr.ru
            </ScalableText>
          </ScalableText>
          <ScalableText style={MARGIN}>We’re on social media:</ScalableText>
          <View style={SOCIAL_CONTAINER}>
            <TouchableOpacity
              onPress={() => openLink('https://vk.com/rkssentr')}
            >
              <IconC size={25} name="vk" light color="blue" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openLink('https://instagram.com/rks.sentr?igshid=1i0u42gi7mci2')
              }
              style={{ marginLeft: 15 }}
            >
              <IconC size={25} name="instagram" light color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      )
    case 'rus':
      return (
        <View>
          <ScalableText style={MARGIN}>
            Напишите нам по адресу e-mail: rkssentr@gmail.com
          </ScalableText>
          <ScalableText style={MARGIN}>
            Наш сайт:{' '}
            <ScalableText
              color="blue"
              onPress={() => openLink('https://rkssentr.ru')}
            >
              https://rkssentr.ru
            </ScalableText>
          </ScalableText>
          <ScalableText style={MARGIN}>Мы в социальных сетях:</ScalableText>
          <View style={SOCIAL_CONTAINER}>
            <TouchableOpacity
              onPress={() => openLink('https://vk.com/rkssentr')}
            >
              <IconC size={25} name="vk" light color="blue" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openLink('https://instagram.com/rks.sentr?igshid=1i0u42gi7mci2')
              }
              style={{ marginLeft: 15 }}
            >
              <IconC size={25} name="instagram" light color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      )
  }
}

export const FeedbackComponent = ({ lang }) => (
  <ScreenWrapper
    contentContainerStyle={{
      paddingVertical: 46,
      paddingHorizontal: 16,
    }}
  >
    {renderContent({ lang })}
  </ScreenWrapper>
)

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
})

const mapDispatchToProps = {}

export const Feedback = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedbackComponent)
