import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5Pro'

import { TextR } from './TextR'

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
  sortByUp,
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
          <Icon size={24} name="chevron-left" color="#fff" />
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
          <Icon size={20} name="play" color="#fff" />
        </TouchableOpacity>
      )}
      {!!searchAction && (
        <TouchableOpacity
          onPress={() => searchAction()}
          style={{ marginRight: 21 }}
        >
          <Icon size={22} name="search" color="#fff" />
        </TouchableOpacity>
      )}
      {!!toggleFavorite && (
        <TouchableOpacity
          onPress={() => toggleFavorite(scene.route.name)}
          style={{ marginRight: 25 }}
        >
          <Icon size={20} name="bookmark" solid={isFavor} color="#fff" />
        </TouchableOpacity>
      )}
      {!!sortByAction && (
        <TouchableOpacity
          onPress={() => sortByAction()}
          style={{ marginRight: 23 }}
        >
          <Icon
            size={22}
            name={sortByUp ? 'sort-alpha-up' : 'sort-alpha-down'}
            light
            color="#fff"
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => toggleSideMenu()}>
        <Icon size={24} name="bars" color="#fff" />
      </TouchableOpacity>
    </View>
  )
}
