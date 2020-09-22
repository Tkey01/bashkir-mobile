import React from 'react'
import { connect } from 'react-redux'
import PlayerScreen from 'react-native-sound-playerview'
import { createStackNavigator } from '@react-navigation/stack'

import * as SCREENS from '../screens'
import * as ACTIONS from '../redux/actions'
import { MyHeader } from '../components/MyHeader'
import { languages } from '../global/languages'
import { getLangText } from '../helpers/getLangText'

export const Stack = createStackNavigator()

import { generateCommonRoutes } from '../helpers/generateCommonRoutes'
import { audioMapping } from '../global/audioMapping'
import { cutLongTitle } from '../helpers/cutLongTitle'

export const StackNavigatorComponent = ({
  navigation,
  favorites,
  toggleFavorite,
  notes,
  lang,
}) => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        header: (props) => {
          const routeName = props.scene.route.name
          const isFavor = favorites[routeName]
          const audioFile = audioMapping[routeName]

          return (
            <MyHeader
              {...props}
              isFavor={isFavor}
              searchAction={() => navigation.navigate('Search')}
              toggleFavorite={toggleFavorite}
              toggleSideMenu={props.navigation.toggleDrawer}
              playVideoAction={
                audioFile
                  ? () =>
                      navigation.navigate('AudioPlayer', {
                        filepath: audioFile,
                      })
                  : null
              }
            />
          )
        },
      }}
    >
      <Stack.Screen
        name="AudioPlayer"
        component={PlayerScreen}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.AudioPlayer[lang],
              `routes.AudioPlayer.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="Main"
        component={SCREENS.Main}
        options={{
          title: cutLongTitle(
            getLangText(languages.routes.Main[lang], `routes.Main.${lang}`),
          ),
        }}
      />
      <Stack.Screen
        name="Bort"
        component={SCREENS.BortMain}
        options={{
          title: cutLongTitle(
            getLangText(languages.routes.Bort[lang], `routes.Bort.${lang}`),
          ),
        }}
      />
      <Stack.Screen
        name="Shor"
        component={SCREENS.ShorMain}
        options={{
          title: cutLongTitle(
            getLangText(languages.routes.Shor[lang], `routes.Shor.${lang}`),
          ),
        }}
      />
      <Stack.Screen
        name="Textile"
        component={SCREENS.TextileMain}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.Textile[lang],
              `routes.Textile.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="TextileQuilt"
        component={SCREENS.TextileQuiltMain}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.TextileQuilt[lang],
              `routes.TextileQuilt.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="TextileBatik"
        component={SCREENS.TextileBatikMain}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.TextileBatik[lang],
              `routes.TextileBatik.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="TextileChen"
        component={SCREENS.TextileChenMain}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.TextileChen[lang],
              `routes.TextileChen.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="TextilePatch"
        component={SCREENS.TextilePatchMain}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.TextilePatch[lang],
              `routes.TextilePatch.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="Wood"
        component={SCREENS.WoodMain}
        options={{
          title: cutLongTitle(
            getLangText(languages.routes.Wood[lang], `routes.Wood.${lang}`),
          ),
        }}
      />
      <Stack.Screen
        name="Berest"
        component={SCREENS.BerestMain}
        options={{
          title: cutLongTitle(
            getLangText(languages.routes.Berest[lang], `routes.Berest.${lang}`),
          ),
        }}
      />
      <Stack.Screen
        name="Voil"
        component={SCREENS.VoilMain}
        options={{
          title: cutLongTitle(
            getLangText(languages.routes.Voil[lang], `routes.Voil.${lang}`),
          ),
        }}
      />

      {generateCommonRoutes({ routeName: 'Bort', lang })}
      {generateCommonRoutes({ routeName: 'Shor', lang })}
      {generateCommonRoutes({ routeName: 'TextileQuilt', lang })}
      {generateCommonRoutes({ routeName: 'TextileChen', lang })}
      {generateCommonRoutes({ routeName: 'TextileBatik', lang })}
      {generateCommonRoutes({ routeName: 'TextilePatch', lang })}
      {generateCommonRoutes({ routeName: 'Wood', lang })}
      {generateCommonRoutes({ routeName: 'Berest', lang })}
      {generateCommonRoutes({ routeName: 'Voil', lang })}

      <Stack.Screen
        name="Settings"
        component={SCREENS.Settings}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.Settings[lang],
              `routes.Settings.${lang}`,
            ),
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
          title: cutLongTitle(
            getLangText(
              languages.routes.Favorites[lang],
              `routes.Favorites.${lang}`,
            ),
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
          title: cutLongTitle(
            getLangText(languages.routes.Search[lang], `routes.Search.${lang}`),
          ),
        }}
      />
      <Stack.Screen
        name="Notes"
        component={SCREENS.Notes}
        options={{
          title: cutLongTitle(
            getLangText(languages.routes.Notes[lang], `routes.Notes.${lang}`),
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
          title: cutLongTitle(
            getLangText(
              languages.routes.AddNote[lang],
              `routes.AddNote.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="NormBase"
        component={SCREENS.NormBase}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.NormBase[lang],
              `routes.NormBase.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="About"
        component={SCREENS.About}
        options={{
          title: cutLongTitle(
            getLangText(languages.routes.About[lang], `routes.About.${lang}`),
          ),
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={SCREENS.Feedback}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.Feedback[lang],
              `routes.Feedback.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="Terms"
        component={SCREENS.Terms}
        options={{
          title: cutLongTitle(
            getLangText(languages.routes.Terms[lang], `routes.Terms.${lang}`),
          ),
        }}
      />
      <Stack.Screen
        name="RulesAct"
        component={SCREENS.RulesAct}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.RulesAct[lang],
              `routes.RulesAct.${lang}`,
            ),
          ),
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={SCREENS.PrivacyPolicy}
        options={{
          title: cutLongTitle(
            getLangText(
              languages.routes.PrivacyPolicy[lang],
              `routes.PrivacyPolicy.${lang}`,
            ),
          ),
        }}
      />
      {notes.map((note) => (
        <Stack.Screen
          key={note.routeName}
          name={note.routeName}
          component={SCREENS.AddNote}
          options={{
            title: cutLongTitle(
              getLangText(languages.routes.Note[lang], `routes.Note.${lang}`),
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
