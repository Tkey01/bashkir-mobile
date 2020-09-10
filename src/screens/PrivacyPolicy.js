import React from 'react'
import { connect } from 'react-redux'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { ScalableText } from '../components/ScalableText'
import { getLangText } from '../helpers/getLangText'
import { languages } from '../global/languages'

export const PrivacyPolicyComponent = ({ lang }) => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <ScalableText>
        {getLangText(
          languages.routes.PrivacyPolicy[lang],
          `routes.PrivacyPolicy.${lang}`,
        )}
      </ScalableText>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
})

const mapDispatchToProps = {}

export const PrivacyPolicy = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivacyPolicyComponent)
