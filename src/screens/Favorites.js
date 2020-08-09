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
import { ScreenWrapper } from '../components/ScreenWrapper'

export const FavoritesComponent = ({
  lang,
  favorites,
  theme,
  toggleFavorite,
  navigation,
}) => {
  return favorites.length ? (
    <ScreenWrapper
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
    </ScreenWrapper>
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme === 'light' ? '#fff' : '#000',
      }}
    >
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
  theme: state.theme,
  favorites: selectFavorites(state.favorites),
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const Favorites = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesComponent)
