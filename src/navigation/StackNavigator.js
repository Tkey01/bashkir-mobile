import React from 'react'
import { connect } from 'react-redux'

import { createStackNavigator } from '@react-navigation/stack'

import * as SCREENS from '../screens'
import * as ACTIONS from '../redux/actions'
import { MyHeader } from '../components/MyHeader'

export const Stack = createStackNavigator()

export const StackNavigatorComponent = ({
  navigation,
  favorites,
  toggleFavorite,
}) => (
  <Stack.Navigator
    initialRouteName="AddNote"
    screenOptions={{
      header: (props) => {
        const isFavor = favorites[props.scene.route.name]
        return (
          <MyHeader
            {...props}
            isFavor={isFavor}
            searchAction={() => navigation.navigate('Search')}
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
      name="Shor"
      component={SCREENS.ShorMain}
      options={{ title: 'Шорничество' }}
    />
    <Stack.Screen
      name="ShorDescription"
      component={SCREENS.ShorDescription}
      options={{ title: 'Описание' }}
    />
    <Stack.Screen
      name="ShorSources"
      component={SCREENS.ShorSources}
      options={{ title: 'Источники' }}
    />
    <Stack.Screen
      name="ShorStuff"
      component={SCREENS.ShorStuff}
      options={{ title: 'Материалы' }}
    />
    <Stack.Screen
      name="ShorTech"
      component={SCREENS.ShorTech}
      options={{ title: 'Технология' }}
    />
    <Stack.Screen
      name="ShorTools"
      component={SCREENS.ShorTools}
      options={{ title: 'Инструменты' }}
    />

    <Stack.Screen
      name="Textile"
      component={SCREENS.TextileMain}
      options={{ title: 'Текстиль' }}
    />
    <Stack.Screen
      name="TextileDescription"
      component={SCREENS.TextileDescription}
      options={{ title: 'Описание' }}
    />
    <Stack.Screen
      name="TextileSources"
      component={SCREENS.TextileSources}
      options={{ title: 'Источники' }}
    />
    <Stack.Screen
      name="TextileStuff"
      component={SCREENS.TextileStuff}
      options={{ title: 'Материалы' }}
    />
    <Stack.Screen
      name="TextileTech"
      component={SCREENS.TextileTech}
      options={{ title: 'Технология' }}
    />
    <Stack.Screen
      name="TextileTools"
      component={SCREENS.TextileTools}
      options={{ title: 'Инструменты' }}
    />

    <Stack.Screen
      name="Wood"
      component={SCREENS.WoodMain}
      options={{ title: 'Резьба по дереву' }}
    />
    <Stack.Screen
      name="WoodDescription"
      component={SCREENS.WoodDescription}
      options={{ title: 'Описание' }}
    />
    <Stack.Screen
      name="WoodSources"
      component={SCREENS.WoodSources}
      options={{ title: 'Источники' }}
    />
    <Stack.Screen
      name="WoodStuff"
      component={SCREENS.WoodStuff}
      options={{ title: 'Материалы' }}
    />
    <Stack.Screen
      name="WoodTech"
      component={SCREENS.WoodTech}
      options={{ title: 'Технология' }}
    />
    <Stack.Screen
      name="WoodTools"
      component={SCREENS.WoodTools}
      options={{ title: 'Инструменты' }}
    />

    <Stack.Screen
      name="Berest"
      component={SCREENS.BerestMain}
      options={{ title: 'Резьба по бересте' }}
    />
    <Stack.Screen
      name="BerestDescription"
      component={SCREENS.BerestDescription}
      options={{ title: 'Описание' }}
    />
    <Stack.Screen
      name="BerestSources"
      component={SCREENS.BerestSources}
      options={{ title: 'Источники' }}
    />
    <Stack.Screen
      name="BerestStuff"
      component={SCREENS.BerestStuff}
      options={{ title: 'Материалы' }}
    />
    <Stack.Screen
      name="BerestTech"
      component={SCREENS.BerestTech}
      options={{ title: 'Технология' }}
    />
    <Stack.Screen
      name="BerestTools"
      component={SCREENS.BerestTools}
      options={{ title: 'Инструменты' }}
    />

    <Stack.Screen
      name="Voil"
      component={SCREENS.VoilMain}
      options={{ title: 'Резьба по бересте' }}
    />
    <Stack.Screen
      name="VoilDescription"
      component={SCREENS.VoilDescription}
      options={{ title: 'Описание' }}
    />
    <Stack.Screen
      name="VoilSources"
      component={SCREENS.VoilSources}
      options={{ title: 'Источники' }}
    />
    <Stack.Screen
      name="VoilStuff"
      component={SCREENS.VoilStuff}
      options={{ title: 'Материалы' }}
    />
    <Stack.Screen
      name="VoilTech"
      component={SCREENS.VoilTech}
      options={{ title: 'Технология' }}
    />
    <Stack.Screen
      name="VoilTools"
      component={SCREENS.VoilTools}
      options={{ title: 'Инструменты' }}
    />

    <Stack.Screen
      name="Settings"
      component={SCREENS.Settings}
      options={{ title: 'Настройки' }}
    />
    <Stack.Screen
      name="AddNote"
      component={SCREENS.AddNote}
      options={{ title: 'Добавить заметку' }}
    />
    <Stack.Screen
      name="Favorites"
      component={SCREENS.Favorites}
      options={{ title: 'Избранное' }}
    />
    <Stack.Screen
      name="Search"
      component={SCREENS.Search}
      options={{ title: 'Поиск' }}
    />
    <Stack.Screen
      name="Notes"
      component={SCREENS.Notes}
      options={{ title: 'Заметки' }}
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
