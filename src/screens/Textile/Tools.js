import React from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'

import { TemplateString } from '../../components/TemplateString'
import { languages } from '../../global/languages'
import { getTemplateStringArray } from '../../helpers/getTemplateStringArray'
import { getLangText } from '../../helpers/getLangText'

export const ToolsComponent = ({ lang }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <TemplateString color="#505050">
        {getTemplateStringArray(
          getLangText(languages.textile.tools[lang], `textile.tools.${lang}`),
        )}
      </TemplateString>
    </ScrollView>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
})

const mapDispatchToProps = {}

export const Tools = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolsComponent)
