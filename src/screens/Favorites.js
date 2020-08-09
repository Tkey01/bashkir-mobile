import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'

import { languages } from '../global/languages'
import { ListItem } from '../components/ListItem'
import * as ACTIONS from '../redux/actions'
import { iconSelector } from '../helpers/iconSelector'
import { selectFavorites } from '../redux/selectors'
import { routesNameSelector } from '../helpers/routesNameSelector'
import { ScalableText } from '../components/ScalableText'
import { getLangText } from '../helpers/getLangText'

export const FavoritesComponent = ({
  lang,
  favorites,
  toggleFavorite,
  navigation,
}) => {
  return favorites.length ? (
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
            icon={iconSelector(screenName)}
            onPress={() => navigation.navigate(screenName)}
            onPressClose={() => toggleFavorite(screenName)}
          />
        )
      })}
    </ScrollView>
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScalableText
        style={{
          textAlign: 'center',
        }}
      >
        {getLangText(
          languages.favorites.notAdded[lang],
          `favorites.notAdded.${lang}`,
        )}
      </ScalableText>
    </View>
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
