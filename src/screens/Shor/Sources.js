import React from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'

import { TemplateString } from '../../components/TemplateString'
import { languages } from '../../global/languages'
import { getTemplateStringArray } from '../../helpers/getTemplateStringArray'

export const SourcesComponent = ({ lang }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <TemplateString color="#505050">
        {getTemplateStringArray(languages.shor.sources[lang])}
      </TemplateString>
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