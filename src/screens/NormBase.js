import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import { ScreenWrapper } from '../components/ScreenWrapper'
import { TextC } from '../components/TextC'
import { ListItem } from '../components/ListItem'
import actIcon from '../assets/images/act-icon.png'
import { getLangText } from '../helpers/getLangText'
import { languages } from '../global/languages'

const acts = [
  'RuleAct-1',
  'RuleAct-2',
  'RuleAct-3',
  'RuleAct-4',
  'RuleAct-5',
  'RuleAct-6',
]

export const NormBaseComponent = ({ lang }) => {
  const onSave = useCallback(() => {
    console.log('save act action')
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
          key={act}
          icon={actIcon}
          text={
            getLangText(languages.normBase.acts[lang], `normBase.acts.${lang}`)[
              index
            ]
          }
          onPressSave={onSave}
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
