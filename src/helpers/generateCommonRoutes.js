import React from 'react'

import { Stack } from '../navigation/StackNavigator'
import * as SCREENS from '../screens'
import { languages } from '../global/languages'
import { getLangText } from '../helpers/getLangText'

const commonNameEndings = ['Description', 'Tools', 'Stuff', 'Tech', 'Sources']

export const generateCommonRoutes = ({ routeName, lang }) => {
  return commonNameEndings.map((ending) => {
    const name = `${routeName}${ending}`

    return (
      <Stack.Screen
        key={name}
        name={name}
        component={SCREENS[name]}
        options={{
          title: getLangText(
            languages.nestedRoutes[ending][lang],
            `nestedRoutes.${ending}.${lang}`,
          ),
        }}
      />
    )
  })
}
