import React from 'react'
import { connect } from 'react-redux'

import { TemplateString } from '../../components/TemplateString'
import { languages } from '../../global/languages'
import { getTemplateStringArray } from '../../helpers/getTemplateStringArray'
import { getLangText } from '../../helpers/getLangText'
import { ScreenWrapper } from '../../components/ScreenWrapper'

export const SourcesComponent = ({ lang }) => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <TemplateString>
        {getTemplateStringArray(
          getLangText(languages.bort.sources[lang], `bort.sources.${lang}`),
        )}
      </TemplateString>
    </ScreenWrapper>
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
