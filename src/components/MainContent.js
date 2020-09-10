import React, { useRef } from 'react'
import { connect } from 'react-redux'

import materialsIcon from '../assets/images/materials-icon.png'
import toolsIcon from '../assets/images/tools-icon.png'
import techIcon from '../assets/images/technology-icon.png'
import descIcon from '../assets/images/desc-icon.png'
import sourcesIcon from '../assets/images/sources-icon.png'

import { ListItem } from '../components/ListItem'
import { routesNameSelector } from '../helpers/routesNameSelector'
import * as ACTIONS from '../redux/actions'
import { ScreenWrapper } from './ScreenWrapper'

export const MainContentComponent = ({
  navigation,
  favorites,
  language,
  toggleFavorite,
  routeName,
}) => {
  const pages = useRef([
    {
      icon: descIcon,
      screenName: `${routeName}Description`,
    },
    {
      icon: toolsIcon,
      screenName: `${routeName}Tools`,
    },
    {
      icon: materialsIcon,
      screenName: `${routeName}Stuff`,
    },
    {
      icon: techIcon,
      screenName: `${routeName}Tech`,
    },
    {
      icon: sourcesIcon,
      screenName: `${routeName}Sources`,
    },
  ])
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 46,
        paddingHorizontal: 16,
      }}
    >
      {pages.current.map((page, index) => (
        <ListItem
          key={index}
          text={routesNameSelector(page.screenName, language)}
          icon={page.icon}
          isFavor={favorites[page.screenName]}
          onPress={() => navigation.navigate(page.screenName)}
          onPressFavor={() => toggleFavorite(page.screenName)}
        />
      ))}
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

export const MainContent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContentComponent)
