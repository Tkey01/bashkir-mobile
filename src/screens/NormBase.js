import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { ScreenWrapper } from '../components/ScreenWrapper'
import { ListItem } from '../components/ListItem'
import actIcon from '../assets/images/act-icon.png'
import { Linking } from 'react-native'
import { getLangText } from '../helpers/getLangText'
import { languages } from '../global/languages'

const path = 'https://uniprolings.ru/remeslo'

const acts = [
  {
    name: 'Федеральный закон N 7-ФЗ',
    link: `${path}/prom.rtf`,
  },
  {
    name:
      'Протокол президиума по стратегическому развитию и национальным проектам',
    link: `${path}/prez.rtf`,
  },
  { name: 'Отраслевое соглашение', link: `${path}/otrasl.rtf` },
  {
    name: 'Приказ Минпромторга РФ от 15.04.2009 N 273',
    link: `${path}/prikaz_1.rtf`,
  },
  {
    name: 'Приказ Минпромторга РФ от 15.04.2009 N 274',
    link: `${path}/prikaz_2.rtf`,
  },
]

export const NormBaseComponent = ({ lang, navigation }) => {
  const onSave = useCallback((link) => {
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
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 40,
        paddingHorizontal: 16,
      }}
    >
      {acts.map((act, index) => (
        <ListItem
          key={index}
          icon={actIcon}
          text={getLangText(
            languages.normBase.acts[lang][index],
            `normBase.acts.${lang}.${index}`,
          )}
          onPress={() => navigation.navigate('RulesAct', { index })}
          onPressSave={() => onSave(act.link)}
        />
      ))}
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
})

const mapDispatchToProps = {}

export const NormBase = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NormBaseComponent)
