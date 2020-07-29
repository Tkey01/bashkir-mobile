import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import { TextR } from './TextR'
import chevronLeft from '../assets/images/chevron-left.png'
import favorites from '../assets/images/favorites.png'
import favoritesFullfiled from '../assets/images/favorites-fullfiled.png'
import gamburger from '../assets/images/gamburger.png'
import search from '../assets/images/search.png'
import sortByAlphabet from '../assets/images/sortByAlphabet.png'
import playVideo from '../assets/images/play-video.png'

const CONTAINER = {
  backgroundColor: '#3269C8',
  height: 60,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
}

export const MyHeader = ({
  scene,
  previous,
  navigation,
  isFavor,
  toggleFavorite,
  searchAction,
  toggleSideMenu,
  sortByAction,
  playVideoAction,
}) => {
  const { options } = scene.descriptor
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name

  return (
    <View style={CONTAINER}>
      {previous && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={chevronLeft} />
        </TouchableOpacity>
      )}
      <TextR
        style={{
          fontSize: 20,
          color: '#fff',
          marginLeft: previous ? 40 : 56,
          flex: 1,
        }}
      >
        {title}
      </TextR>
      {!!playVideoAction && (
        <TouchableOpacity
          onPress={() => playVideoAction()}
          style={{ marginRight: 19 }}
        >
          <Image source={playVideo} />
        </TouchableOpacity>
      )}
      {!!searchAction && (
        <TouchableOpacity
          onPress={() => searchAction()}
          style={{ marginRight: 21 }}
        >
          <Image source={search} />
        </TouchableOpacity>
      )}
      {!!toggleFavorite && (
        <TouchableOpacity
          onPress={() => toggleFavorite(scene.route.name)}
          style={{ marginRight: 25 }}
        >
          <Image source={isFavor ? favoritesFullfiled : favorites} />
        </TouchableOpacity>
      )}
      {!!sortByAction && (
        <TouchableOpacity
          onPress={() => sortByAction()}
          style={{ marginRight: 23 }}
        >
          <Image source={sortByAlphabet} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => toggleSideMenu()}>
        <Image source={gamburger} />
      </TouchableOpacity>
    </View>
  )
}
