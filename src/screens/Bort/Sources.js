import React from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'

import { languages } from '../../global/languages'
import { ScalableText } from '../../components/ScalableText'

export const SourcesComponent = ({ lang }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <ScalableText color="#505050">
        {languages.bort.sources[lang]}
      </ScalableText>
    </ScrollView>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
})

const mapDispatchToProps = {}

export const Sources = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SourcesComponent)
