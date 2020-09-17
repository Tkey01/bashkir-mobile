import React from 'react'
import { connect } from 'react-redux'

import { TemplateString } from '../../components/TemplateString'
import { languages } from '../../global/languages'
import { getTemplateStringArray } from '../../helpers/getTemplateStringArray'
import { getLangText } from '../../helpers/getLangText'
import { ScreenWrapper } from '../../components/ScreenWrapper'
import shor from '../../assets/images/content/shor.jpg'
import { Image } from 'react-native'

export const DescriptionComponent = ({ lang }) => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <Image
        source={shor}
        resizeMethod="scale"
        resizeMode="cover"
        style={{
          width: '100%',
          height: 500,
          marginBottom: 10,
        }}
      />
      <TemplateString>
        {getTemplateStringArray(
          getLangText(
            languages.shor.description[lang],
            `shor.description.${lang}`,
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
