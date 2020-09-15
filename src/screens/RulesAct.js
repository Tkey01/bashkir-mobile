import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { TemplateString } from '../components/TemplateString'
import { rulesActs } from '../global/rulesActs'
import { getTemplateStringArray } from '../helpers/getTemplateStringArray'

export const RulesAct = ({ route }) => {
  const index = route.params ? route.params.index : 0

  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 20,
        paddingHorizontal: 16,
      }}
    >
      <TemplateString>
        {getTemplateStringArray(rulesActs[index])}
      </TemplateString>
    </ScreenWrapper>
  )
}
