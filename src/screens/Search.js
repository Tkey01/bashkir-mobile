import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { View, TextInput, Image } from 'react-native'

import { routes } from '../global/routes'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { ListItem } from '../components/ListItem'
import { iconSelector } from '../helpers/iconSelector'
import * as ACTIONS from '../redux/actions'
import searchIcon from '../assets/images/search-icon.png'
import { IconC } from '../components/IconC'

const SEARCH_CONTAINER = {
  borderWidth: 1,
  padding: 10,
  borderColor: '#447FE3',
  height: 60,
  borderRadius: 8,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 25,
}

const SEARCH_ICON = {
  width: 40,
  height: 40,
}

const INPUT = {
  flex: 1,
  marginLeft: 20,
  fontSize: 12,
}

const CHEVRON_RIGHT = {
  marginLeft: 20,
  marginRight: 10,
}

export const SearchComponent = ({
  navigation,
  lang,
  theme,
  favorites,
  toggleFavorite,
}) => {
  const [results, setResults] = useState([])
  const [value, setValue] = useState('')

  const search = useCallback(
    (text) => {
      setResults(
        routes.filter((route) =>
          route.title[lang].toLowerCase().includes(text.toLowerCase()),
        ),
      )
    },
    [lang],
  )

  const onInputChange = useCallback(
    (text) => {
      setValue(text)
      search(text)
    },
    [search],
  )

  return (
    <ScreenWrapper
      contentContainerStyle={{ paddingTop: 8, paddingHorizontal: 16 }}
    >
      <View style={SEARCH_CONTAINER}>
        <Image source={searchIcon} style={SEARCH_ICON} />
        <TextInput
          style={[INPUT, { color: theme === 'light' ? '#5C6063' : '#fff' }]}
          value={value}
          onChangeText={onInputChange}
        />
        <IconC
          name="chevron-right"
          size={25}
          light
          color="blue"
          style={CHEVRON_RIGHT}
        />
      </View>
      {results.map((route, index) => (
        <ListItem
          key={index}
          text={route.title[lang]}
          icon={iconSelector(route.routeName)}
          isFavor={favorites[route.routeName]}
          onPressFavor={toggleFavorite}
          onPress={() => navigation.navigate(route.routeName)}
        />
      ))}
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
  favorites: state.favorites,
  theme: state.theme,
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchComponent)
