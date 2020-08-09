import React from 'react'
import { connect } from 'react-redux'

import { ListItem } from '../components/ListItem'
import * as ACTIONS from '../redux/actions'

import bortIcon from '../assets/images/bort-icon.png'
import shorIcon from '../assets/images/shor-icon.png'
import voilIcon from '../assets/images/voil-icon.png'
import textileIcon from '../assets/images/textile-icon.png'
import woodIcon from '../assets/images/wood-icon.png'
import berestIcon from '../assets/images/berest-icon.png'
import { routesNameSelector } from '../helpers/routesNameSelector'
import { ScreenWrapper } from '../components/ScreenWrapper'

const VIEW = {
  paddingTop: 24,
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
    <ScreenWrapper style={VIEW}>
      {PAGES.map((page, index) => {
        return (
          <ListItem
            key={index}
            text={routesNameSelector(page.screenName, language)}
            icon={page.icon}
            isFavor={favorites[page.screenName]}
            onPress={() => navigation.navigate(page.screenName)}
            onPressFavor={() => toggleFavorite(page.screenName)}
          />
        )
      })}
    </ScreenWrapper>
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
