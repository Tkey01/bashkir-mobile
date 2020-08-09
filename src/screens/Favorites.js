import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'

import { languages } from '../global/languages'
import { ListItem } from '../components/ListItem'
import * as ACTIONS from '../redux/actions'
import { iconSelector } from '../helpers/iconSelector'
import { selectFavorites } from '../redux/selectors'
import { routesNameSelector } from '../helpers/routesNameSelector'

export const FavoritesComponent = ({
  lang,
  favorites,
  toggleFavorite,
  navigation,
}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      {favorites.map((screenName, index) => {
        return (
          <ListItem
            key={index}
            text={routesNameSelector(screenName, lang)}
            // text={'asda'}
            icon={iconSelector(screenName)}
            // isFavor={screenName.isFavor}
            onPress={() => navigation.navigate(screenName)}
            // onPressFavor={() => toggleFavorite(screenName)}
            onPressClose={() => toggleFavorite(screenName)}
          />
        )
      })}
    </ScrollView>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
  favorites: selectFavorites(state.favorites),
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const Favorites = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesComponent)
