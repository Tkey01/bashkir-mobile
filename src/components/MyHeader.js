import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { TextC } from './TextC'
import { IconC } from './IconC'

const CONTAINER = {
  height: 60,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
}

export const MyHeaderComponent = ({
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
  theme,
}) => {
  const { options } = scene.descriptor
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name

  return (
    <View
      style={[
        CONTAINER,
        {
          backgroundColor: theme === 'light' ? '#3269C8' : '#131354',
        },
      ]}
    >
      {previous && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconC size={24} name="chevron-left" color="white" />
        </TouchableOpacity>
      )}
      <TextC
        color="white"
        style={{
          fontSize: 20,
          marginLeft: previous ? 40 : 56,
          flex: 1,
        }}
      >
        {title}
      </TextC>
      {!!playVideoAction && (
        <TouchableOpacity
          onPress={() => playVideoAction()}
          style={{ marginRight: 19 }}
        >
          <IconC size={20} name="play" color="white" />
        </TouchableOpacity>
      )}
      {!!searchAction && (
        <TouchableOpacity
          onPress={() => searchAction()}
          style={{ marginRight: 21 }}
        >
          <IconC size={22} name="search" color="white" />
        </TouchableOpacity>
      )}
      {!!toggleFavorite && (
        <TouchableOpacity
          onPress={() => toggleFavorite(scene.route.name)}
          style={{ marginRight: 25 }}
        >
          <IconC size={20} name="bookmark" solid={isFavor} color="white" />
        </TouchableOpacity>
      )}
      {!!sortByAction && (
        <TouchableOpacity
          onPress={() => sortByAction()}
          style={{ marginRight: 23 }}
        >
          <IconC
            size={22}
            name={sortByUp ? 'sort-alpha-up' : 'sort-alpha-down'}
            light
            color="white"
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => toggleSideMenu()}>
        <IconC size={24} name="bars" color="white" />
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme,
})

const mapDispatchToProps = {}

export const MyHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyHeaderComponent)
