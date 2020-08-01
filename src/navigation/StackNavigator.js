import React from 'react'
import { connect } from 'react-redux'

import { createStackNavigator } from '@react-navigation/stack'

import * as SCREENS from '../screens'
import * as ACTIONS from '../redux/actions'
import { MyHeader } from '../components/MyHeader'

export const Stack = createStackNavigator()

export const StackNavigatorComponent = ({ favorites, toggleFavorite }) => (
  <Stack.Navigator
    initialRouteName="Main"
    screenOptions={{
      header: (props) => {
        const isFavor = favorites[props.scene.route.name]
        return (
          <MyHeader
            {...props}
            isFavor={isFavor}
            searchAction={() => {}}
            playVideoAction={() => {}}
            toggleFavorite={toggleFavorite}
            toggleSideMenu={props.navigation.toggleDrawer}
          />
        )
      },
    }}
  >
    <Stack.Screen
      name="Main"
      component={SCREENS.Main}
      options={{ title: 'Главное меню' }}
    />
    <Stack.Screen
      name="Bort"
      component={SCREENS.BortMain}
      options={{ title: 'Бортничество' }}
    />
    <Stack.Screen
      name="BortDescription"
      component={SCREENS.BortDescription}
      options={{ title: 'Описание' }}
    />
    <Stack.Screen
      name="BortSources"
      component={SCREENS.BortSources}
      options={{ title: 'Источники' }}
    />
    <Stack.Screen
      name="BortStuff"
      component={SCREENS.BortStuff}
      options={{ title: 'Материалы' }}
    />
    <Stack.Screen
      name="BortTech"
      component={SCREENS.BortTech}
      options={{ title: 'Технология' }}
    />
    <Stack.Screen
      name="BortTools"
      component={SCREENS.BortTools}
      options={{ title: 'Инструменты' }}
    />
    <Stack.Screen
      name="BortVideo"
      component={SCREENS.BortVideo}
      options={{ title: 'Видео' }}
    />
    <Stack.Screen
      name="Voil"
      component={SCREENS.VoilMain}
      options={{ title: 'Войлочные изделия' }}
    />
    <Stack.Screen
      name="Textile"
      component={SCREENS.TextileMain}
      options={{ title: 'Текстиль' }}
    />
    <Stack.Screen
      name="Wood"
      component={SCREENS.WoodMain}
      options={{ title: 'Резьба по дереву' }}
    />
    <Stack.Screen
      name="Berest"
      component={SCREENS.BerestMain}
      options={{ title: 'Резьба по бересте' }}
    />
    <Stack.Screen
      name="Settings"
      component={SCREENS.Settings}
      options={{ title: 'Настройки' }}
    />
  </Stack.Navigator>
)

const mapStateToProps = (state, ownProps) => ({
  favorites: state.favorites,
  language: state.language,
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const StackNavigator = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StackNavigatorComponent)
