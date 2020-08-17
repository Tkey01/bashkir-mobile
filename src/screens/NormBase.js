import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { ScreenWrapper } from '../components/ScreenWrapper'
import { ListItem } from '../components/ListItem'
import { getLangText } from '../helpers/getLangText'
import { languages } from '../global/languages'
import actIcon from '../assets/images/act-icon.png'

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
