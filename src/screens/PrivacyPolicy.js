import React from 'react'
import { connect } from 'react-redux'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { TemplateString } from '../components/TemplateString'
import { languages } from '../global/languages'
import { getLangText } from '../helpers/getLangText'
import { getTemplateStringArray } from '../helpers/getTemplateStringArray'

export const PrivacyPolicyComponent = ({ lang }) => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 20,
        paddingHorizontal: 16,
      }}
    >
      <TemplateString>
        {getTemplateStringArray(
          getLangText(languages.privacyPolicy[lang], `privacyPolicy.${lang}`),
        )}
      </TemplateString>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state) => ({
  lang: state.language,
})

const mapDispatchToProps = {}

export const PrivacyPolicy = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivacyPolicyComponent)
