import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { ListItem } from '../../components/ListItem'
import * as ACTIONS from '../../redux/actions'
import { ScreenWrapper } from '../../components/ScreenWrapper'
import { getLangText } from '../../helpers/getLangText'
import { languages } from '../../global/languages'
import { iconSelector } from '../../helpers/iconSelector'

const routes = ['TextileBatik', 'TextileChen', 'TextilePatch', 'TextileQuilt']

export const MainComponent = ({
  navigation,
  favorites,
  lang,
  toggleFavorite,
}) => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          marginTop: 40,
        }}
      >
        {routes.map((routeName, index) => {
          return (
            <ListItem
              key={index}
              text={getLangText(
                languages.routes[routeName][lang],
                `routes.${routeName}.${lang}`,
              )}
              icon={iconSelector(routeName)}
              isFavor={favorites[routeName]}
              onPress={() => navigation.navigate(routeName)}
              onPressFavor={() => toggleFavorite(routeName)}
            />
          )
        })}
      </View>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  favorites: state.favorites,
  lang: state.language,
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
