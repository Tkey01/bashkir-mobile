import React from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'

import { TemplateString } from '../../../components/TemplateString'
import { languages } from '../../../global/languages'
import { getTemplateStringArray } from '../../../helpers/getTemplateStringArray'
import { getLangText } from '../../../helpers/getLangText'
import { ScreenWrapper } from '../../../components/ScreenWrapper'
import quilt from '../../../assets/images/content/quilt.jpg'

export const DescriptionComponent = ({ lang }) => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <Image
        source={quilt}
        resizeMethod="scale"
        resizeMode="cover"
        style={{
          width: '100%',
          height: 300,
          marginBottom: 10,
        }}
      />
      <TemplateString>
        {getTemplateStringArray(
          getLangText(
            languages.textile.description[lang],
            `textile.description.${lang}`,
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

export const Description = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DescriptionComponent)
