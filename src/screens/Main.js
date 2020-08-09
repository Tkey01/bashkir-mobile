import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { ListItem } from '../components/ListItem'
import { languages } from '../global'
import * as ACTIONS from '../redux/actions'

import bortIcon from '../assets/images/bort-icon.png'
import shorIcon from '../assets/images/shor-icon.png'
import voilIcon from '../assets/images/voil-icon.png'
import textileIcon from '../assets/images/textile-icon.png'
import woodIcon from '../assets/images/wood-icon.png'
import berestIcon from '../assets/images/berest-icon.png'

const VIEW = {
  marginTop: 24,
  paddingHorizontal: 20,
}

const PAGES = [
  {
    icon: bortIcon,
    screenName: 'Bort',
  },
  {
    icon: shorIcon,
    screenName: 'Shor',
  },
  {
    icon: voilIcon,
    screenName: 'Voil',
  },
  {
    icon: textileIcon,
    screenName: 'Textile',
  },
  {
    icon: woodIcon,
    screenName: 'Wood',
  },
  {
    icon: berestIcon,
    screenName: 'Berest',
  },
]

export const MainComponent = ({
  language,
  toggleFavorite,
  navigation,
  favorites,
}) => {
  return (
    <View style={VIEW}>
      {PAGES.map((page, index) => {
        return (
          <ListItem
            key={index}
            text={languages.routes[page.screenName][language]}
            icon={page.icon}
            isFavor={favorites[page.screenName]}
            onPress={() => navigation.navigate(page.screenName)}
            onPressFavor={() => toggleFavorite(page.screenName)}
          />
        )
      })}
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  favorites: state.favorites,
  language: state.language,
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
