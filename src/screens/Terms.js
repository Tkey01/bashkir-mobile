import React from 'react'
import { connect } from 'react-redux'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { ScalableText } from '../components/ScalableText'
import { getLangText } from '../helpers/getLangText'
import { languages } from '../global/languages'

export const TermsComponent = ({ lang }) => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <ScalableText>
        {getLangText(languages.routes.Terms[lang], `routes.Terms.${lang}`)}
      </ScalableText>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
})

const mapDispatchToProps = {}

export const Terms = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TermsComponent)
