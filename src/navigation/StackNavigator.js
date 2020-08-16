import React from 'react'
import { connect } from 'react-redux'

import { createStackNavigator } from '@react-navigation/stack'

import * as SCREENS from '../screens'
import * as ACTIONS from '../redux/actions'
import { MyHeader } from '../components/MyHeader'
import { languages } from '../global/languages'
import { getLangText } from '../helpers/getLangText'

export const Stack = createStackNavigator()

export const StackNavigatorComponent = ({
  navigation,
  favorites,
  toggleFavorite,
  notes,
  lang,
}) => {
  return (
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
        options={{
          title: getLangText(
            languages.routes.Main[lang],
            `routes.Main.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="Bort"
        component={SCREENS.BortMain}
        options={{
          title: getLangText(
            languages.routes.Bort[lang],
            `routes.Bort.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BortDescription"
        component={SCREENS.BortDescription}
        options={{
          title: getLangText(
            languages.nestedRoutes.description[lang],
            `nestedRoutes.description.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BortSources"
        component={SCREENS.BortSources}
        options={{
          title: getLangText(
            languages.nestedRoutes.sources[lang],
            `nestedRoutes.sources.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BortStuff"
        component={SCREENS.BortStuff}
        options={{
          title: getLangText(
            languages.nestedRoutes.stuff[lang],
            `nestedRoutes.stuff.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BortTech"
        component={SCREENS.BortTech}
        options={{
          title: getLangText(
            languages.nestedRoutes.tech[lang],
            `nestedRoutes.tech.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BortTools"
        component={SCREENS.BortTools}
        options={{
          title: getLangText(
            languages.nestedRoutes.tools[lang],
            `nestedRoutes.tools.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="Shor"
        component={SCREENS.ShorMain}
        options={{
          title: getLangText(
            languages.routes.Shor[lang],
            `routes.Shor.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="ShorDescription"
        component={SCREENS.ShorDescription}
        options={{
          title: getLangText(
            languages.nestedRoutes.description[lang],
            `nestedRoutes.description.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="ShorSources"
        component={SCREENS.ShorSources}
        options={{
          title: getLangText(
            languages.nestedRoutes.sources[lang],
            `nestedRoutes.sources.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="ShorStuff"
        component={SCREENS.ShorStuff}
        options={{
          title: getLangText(
            languages.nestedRoutes.stuff[lang],
            `nestedRoutes.stuff.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="ShorTech"
        component={SCREENS.ShorTech}
        options={{
          title: getLangText(
            languages.nestedRoutes.tech[lang],
            `nestedRoutes.tech.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="ShorTools"
        component={SCREENS.ShorTools}
        options={{
          title: getLangText(
            languages.nestedRoutes.tools[lang],
            `nestedRoutes.tools.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="Textile"
        component={SCREENS.TextileMain}
        options={{
          title: getLangText(
            languages.routes.Textile[lang],
            `routes.Textile.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="TextileDescription"
        component={SCREENS.TextileDescription}
        options={{
          title: getLangText(
            languages.nestedRoutes.description[lang],
            `nestedRoutes.description.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="TextileSources"
        component={SCREENS.TextileSources}
        options={{
          title: getLangText(
            languages.nestedRoutes.sources[lang],
            `nestedRoutes.sources.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="TextileStuff"
        component={SCREENS.TextileStuff}
        options={{
          title: getLangText(
            languages.nestedRoutes.stuff[lang],
            `nestedRoutes.stuff.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="TextileTech"
        component={SCREENS.TextileTech}
        options={{
          title: getLangText(
            languages.nestedRoutes.tech[lang],
            `nestedRoutes.tech.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="TextileTools"
        component={SCREENS.TextileTools}
        options={{
          title: getLangText(
            languages.nestedRoutes.tools[lang],
            `nestedRoutes.tools.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="Wood"
        component={SCREENS.WoodMain}
        options={{
          title: getLangText(
            languages.routes.Wood[lang],
            `routes.Wood.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="WoodDescription"
        component={SCREENS.WoodDescription}
        options={{
          title: getLangText(
            languages.nestedRoutes.description[lang],
            `nestedRoutes.description.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="WoodSources"
        component={SCREENS.WoodSources}
        options={{
          title: getLangText(
            languages.nestedRoutes.sources[lang],
            `nestedRoutes.sources.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="WoodStuff"
        component={SCREENS.WoodStuff}
        options={{
          title: getLangText(
            languages.nestedRoutes.stuff[lang],
            `nestedRoutes.stuff.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="WoodTech"
        component={SCREENS.WoodTech}
        options={{
          title: getLangText(
            languages.nestedRoutes.tech[lang],
            `nestedRoutes.tech.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="WoodTools"
        component={SCREENS.WoodTools}
        options={{
          title: getLangText(
            languages.nestedRoutes.tools[lang],
            `nestedRoutes.tools.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="Berest"
        component={SCREENS.BerestMain}
        options={{
          title: getLangText(
            languages.routes.Berest[lang],
            `routes.Berest.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BerestDescription"
        component={SCREENS.BerestDescription}
        options={{
          title: getLangText(
            languages.nestedRoutes.description[lang],
            `nestedRoutes.description.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BerestSources"
        component={SCREENS.BerestSources}
        options={{
          title: getLangText(
            languages.nestedRoutes.sources[lang],
            `nestedRoutes.sources.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BerestStuff"
        component={SCREENS.BerestStuff}
        options={{
          title: getLangText(
            languages.nestedRoutes.stuff[lang],
            `nestedRoutes.stuff.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BerestTech"
        component={SCREENS.BerestTech}
        options={{
          title: getLangText(
            languages.nestedRoutes.tech[lang],
            `nestedRoutes.tech.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="BerestTools"
        component={SCREENS.BerestTools}
        options={{
          title: getLangText(
            languages.nestedRoutes.tools[lang],
            `nestedRoutes.tools.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="Voil"
        component={SCREENS.VoilMain}
        options={{
          title: getLangText(
            languages.routes.Voil[lang],
            `routes.Voil.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="VoilDescription"
        component={SCREENS.VoilDescription}
        options={{
          title: getLangText(
            languages.nestedRoutes.description[lang],
            `nestedRoutes.description.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="VoilSources"
        component={SCREENS.VoilSources}
        options={{
          title: getLangText(
            languages.nestedRoutes.sources[lang],
            `nestedRoutes.sources.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="VoilStuff"
        component={SCREENS.VoilStuff}
        options={{
          title: getLangText(
            languages.nestedRoutes.stuff[lang],
            `nestedRoutes.stuff.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="VoilTech"
        component={SCREENS.VoilTech}
        options={{
          title: getLangText(
            languages.nestedRoutes.tech[lang],
            `nestedRoutes.tech.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="VoilTools"
        component={SCREENS.VoilTools}
        options={{
          title: getLangText(
            languages.nestedRoutes.tools[lang],
            `nestedRoutes.tools.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SCREENS.Settings}
        options={{
          title: getLangText(
            languages.routes.Settings[lang],
            `routes.Settings.${lang}`,
          ),
          header: (props) => {
            return (
              <MyHeader
                {...props}
                toggleSideMenu={props.navigation.toggleDrawer}
              />
            )
          },
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={SCREENS.Favorites}
        options={{
          title: getLangText(
            languages.routes.Favorites[lang],
            `routes.Favorites.${lang}`,
          ),
          header: (props) => {
            return (
              <MyHeader
                {...props}
                toggleSideMenu={props.navigation.toggleDrawer}
                searchAction={() => navigation.navigate('Search')}
              />
            )
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={SCREENS.Search}
        options={{
          title: getLangText(
            languages.routes.Search[lang],
            `routes.Search.${lang}`,
          ),
        }}
      />
      <Stack.Screen
        name="Notes"
        component={SCREENS.Notes}
        options={{
          title: getLangText(
            languages.routes.Notes[lang],
            `routes.Notes.${lang}`,
          ),
          header: (props) => {
            return (
              <MyHeader
                {...props}
                toggleSideMenu={props.navigation.toggleDrawer}
                searchAction={() => navigation.navigate('Search')}
              />
            )
          },
        }}
      />
      <Stack.Screen
        name="AddNote"
        component={SCREENS.AddNote}
        options={{
          title: getLangText(
            languages.routes.AddNote[lang],
            `routes.AddNote.${lang}`,
          ),
        }}
      />
      {notes.map((note) => (
        <Stack.Screen
          key={note.routeName}
          name={note.routeName}
          component={SCREENS.AddNote}
          options={{
            title: getLangText(
              languages.routes.Note[lang],
              `routes.Note.${lang}`,
            ),
            header: (props) => {
              return (
                <MyHeader
                  {...props}
                  toggleSideMenu={props.navigation.toggleDrawer}
                  searchAction={() => navigation.navigate('Search')}
                />
              )
            },
          }}
          initialParams={{ note }}
        />
      ))}
    </Stack.Navigator>
  )
}

const mapStateToProps = (state, ownProps) => ({
  favorites: state.favorites,
  lang: state.language,
  notes: state.notes,
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const StackNavigator = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StackNavigatorComponent)
