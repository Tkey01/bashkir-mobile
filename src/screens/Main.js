import React from 'react'
import { connect } from 'react-redux'

import { ListItem } from '../components/ListItem'
import * as ACTIONS from '../redux/actions'

import { routesNameSelector } from '../helpers/routesNameSelector'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { iconSelector } from '../helpers/iconSelector'

const VIEW = {
  paddingTop: 24,
  paddingHorizontal: 20,
}

const PAGES = [
  {
    screenName: 'Bort',
  },
  {
    screenName: 'Shor',
  },
  {
    screenName: 'Voil',
  },
  {
    screenName: 'Textile',
  },
  {
    screenName: 'Wood',
  },
  {
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
    <ScreenWrapper contentContainerStyle={VIEW}>
      {PAGES.map((page, index) => {
        return (
          <ListItem
            key={index}
            text={routesNameSelector(page.screenName, language)}
            icon={iconSelector(page.screenName)}
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
