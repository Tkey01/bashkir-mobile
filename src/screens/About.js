import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { Linking } from 'react-native'

import { ScalableText } from '../components/ScalableText'
import { ScreenWrapper } from '../components/ScreenWrapper'

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
        <ScalableText>
          Коммерциялы булмаған «Ресурс мәҙәни үҙәк» ойошмаһы тарафынан
          Башҡортостан Республикаһының гражданлыҡ йәмғиәтен үҫтереүгә булышлыҡ
          итеү фонды ярҙамы менән ойошторолған «Акнур» мәҙәни-ағартыу проекты
          рамкаларында{' '}
          <ScalableText
            color="blue"
            style={{}}
            onPress={() => openLink('https://rkssentr.ru')}
          >
            (https://rkssentr.ru){' '}
          </ScalableText>
          «Халыҡ һөнәрҙәре» мобиль ҡушымтаһы эшләнде. Был ҡушымта
          ҡулланыусыларға солоҡсолоҡ,ат егеү кәрәк-яраҡтарын етештереү, ағастан,
          туҙҙан,кейеҙҙән һәм туҡыманан әйберҙәр эшләү шөғөлдәре буйынса белем
          һәм күнекмәләр биреүгә йүнәлтелгән. © Коммерциялы булмаған «Ресурс
          мәҙәни үҙәк» ойошмаһы, 2020 йыл.
        </ScalableText>
      )
    case 'eng':
      return (
        <ScalableText>
          Within the framework of the project entitled “Cultural and educational
          center“ Aknur ”, organized by ANO “ Resource Cultural Center ” with
          the support of the Foundation for Assistance to Civil Society of the
          Republic of Bashkortostan, a mobile application“ Folk Crafts ”was
          developed. This application is aimed at acquiring skills and
          knowledges by users of traditional folk crafts such as beekeeping,
          saddlery, wood carving, birch bark carving, making felt, textiles.
        </ScalableText>
      )
    case 'rus':
      return (
        <ScalableText>
          В рамках проекта Культурно-просветительский центр «Акнур»{' '}
          <ScalableText
            color="blue"
            style={{}}
            onPress={() => openLink('https://rkssentr.ru')}
          >
            (https://rkssentr.ru){' '}
          </ScalableText>
          организованной АНО «Ресурсный культурный центр» при поддержке Фонда
          содействия гражданскому обществу РеспубликиБашкортостан{' '}
          <ScalableText
            color="blue"
            style={{}}
            onPress={() => openLink('https://fsgo.bashkortostan.ru')}
          >
            (https://fsgo.bashkortostan.ru)
          </ScalableText>{' '}
          было разработано мобильное приложение «Народные ремесла». Данное
          приложение направлено на приобретение пользователями умений и навыков
          по традиционным народным ремеслам как бортничество, шорничество,
          резьба по дереву, резьба по бересте, изготовление войлочных,
          текстильных изделий. © АНО «Ресурсный культурный центр», 2020 г.{' '}
        </ScalableText>
      )
  }
}

export const AboutComponent = ({ lang }) => (
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

export const About = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutComponent)
