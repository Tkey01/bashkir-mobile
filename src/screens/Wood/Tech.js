import React from 'react'
import { connect } from 'react-redux'

import { TemplateString } from '../../components/TemplateString'
import { languages } from '../../global/languages'
import { getTemplateStringArray } from '../../helpers/getTemplateStringArray'
import { ScreenWrapper } from '../../components/ScreenWrapper'
import { getLangText } from '../../helpers/getLangText'

export const TechComponent = ({ lang }) => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <TemplateString>
        {getTemplateStringArray(
          getLangText(languages.wood.tech[lang], `wood.tech.${lang}`),
        )}
      </TemplateString>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
})

const mapDispatchToProps = {}

export const Tech = connect(mapStateToProps, mapDispatchToProps)(TechComponent)
