import React from 'react'
import { connect } from 'react-redux'

import { createStackNavigator } from '@react-navigation/stack'

import { Berest, Bort, Short, Textile, Voil, Wood, Main } from '../screens'
import * as ACTIONS from '../redux/actions'
import { MyHeader } from '../components/MyHeader'

export const Stack = createStackNavigator()

export const StackNavigatorComponent = ({ favorites, toggleFavorite }) => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={Main}
      options={{
        title: 'Главное меню',
        header: (props) => {
          const isFavor = favorites[props.scene.route.name]
          return (
            <MyHeader
              {...props}
              isFavor={isFavor}
              searchAction={() => {}}
              toggleFavorite={toggleFavorite}
              toggleSideMenu={props.navigation.toggleDrawer}
            />
          )
        },
      }}
    />
    <Stack.Screen
      name="Bort"
      component={Bort}
      options={{
        title: 'Бортничество',
        header: (props) => {
          const isFavor = favorites[props.scene.route.name]
          return (
            <MyHeader
              {...props}
              isFavor={isFavor}
              searchAction={() => {}}
              toggleFavorite={toggleFavorite}
              toggleSideMenu={props.navigation.toggleDrawer}
            />
          )
        },
      }}
    />
    <Stack.Screen
      name="Short"
      component={Short}
      options={{ title: 'Шорничество' }}
    />
    <Stack.Screen
      name="Voil"
      component={Voil}
      options={{ title: 'Войлочные изделия' }}
    />
    <Stack.Screen
      name="Textile"
      component={Textile}
      options={{ title: 'Текстиль' }}
    />
    <Stack.Screen
      name="Wood"
      component={Wood}
      options={{ title: 'Резьба по дереву' }}
    />
    <Stack.Screen
      name="Berest"
      component={Berest}
      options={{ title: 'Резьба по бересте' }}
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
