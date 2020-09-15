import React from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'

import { TemplateString } from '../../../components/TemplateString'
import { languages } from '../../../global/languages'
import { getTemplateStringArray } from '../../../helpers/getTemplateStringArray'
import { getLangText } from '../../../helpers/getLangText'
import { ScreenWrapper } from '../../../components/ScreenWrapper'

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
          getLangText(
            languages.textile.batik.tech[lang],
            `textile.batik.tech.${lang}`,
          ),
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
