import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { TextInput } from 'react-native'

import { routes } from '../global/routes'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { ListItem } from '../components/ListItem'
import { iconSelector } from '../helpers/iconSelector'
import * as ACTIONS from '../redux/actions'

const INPUT = {
  padding: 20,
  borderWidth: 1,
}

export const SearchComponent = ({
  navigation,
  lang,
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
    <ScreenWrapper style={{ paddingTop: 24, paddingHorizontal: 20 }}>
      <TextInput style={INPUT} value={value} onChangeText={onInputChange} />
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
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchComponent)
