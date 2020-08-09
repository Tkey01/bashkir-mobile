import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import { languages } from '../global/languages'
import { ListItem } from '../components/ListItem'
import * as ACTIONS from '../redux/actions'
import { iconSelector } from '../helpers/iconSelector'

export const NotesComponent = ({
  lang,
  favorites,
  toggleFavorite,
  navigation,
}) => {
  return (
    <View>
      {favorites.map((screenName, index) => {
        return (
          <ListItem
            key={index}
            text={languages.routes[screenName][lang]}
            icon={iconSelector(screenName)}
            // isFavor={screenName.isFavor}
            onPress={() => navigation.navigate(screenName)}
            // onPressFavor={() => toggleFavorite(screenName)}
            onPressClose={() => toggleFavorite(screenName)}
          />
        )
      })}
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const Notes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesComponent)
