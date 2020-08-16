import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Image } from 'react-native'

import { TextC } from '../components/TextC'
import { getLangText } from '../helpers/getLangText'
import { languages } from '../global/languages'
import addIcon from '../assets/images/add-icon.png'
import { ListItem } from '../components/ListItem'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { routesNameSelector } from '../helpers/routesNameSelector'
import { iconSelector } from '../helpers/iconSelector'
import * as ACTIONS from '../redux/actions'

const ADD_CONTAINER = {
  width: 120,
  height: 120,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 8,
  borderColor: '#3269C8',
}

const ADD_ICON = {
  width: 40,
  height: 40,
}

export const NotesComponent = ({
  notes,
  favorites,
  lang,
  theme,
  navigation,
  toggleFavorite,
  addNote,
  deleteNote,
}) => {
  return notes.length ? (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 24,
        paddingHorizontal: 16,
      }}
    >
      {notes.map((note) => {
        return (
          <ListItem
            key={note.routeName}
            text={note.title}
            icon={iconSelector(note.routeName)}
            onPress={() => navigation.navigate(note.routeName)}
            isFavor={favorites[note.routeName]}
            onPressFavor={() => toggleFavorite(note.routeName)}
            onPressClose={() => deleteNote(note.routeName)}
          />
        )
      })}
    </ScreenWrapper>
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme === 'light' ? '#fff' : '#000',
      }}
    >
      <TextC color="gray" style={{ textAlign: 'center' }}>
        {getLangText(languages.notes.notAdded[lang], `notes.notAdded.${lang}`)}
      </TextC>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddNote')}
        style={ADD_CONTAINER}
      >
        <Image source={addIcon} style={ADD_ICON} />
        <TextC color="gray" style={{ marginTop: 20 }}>
          {getLangText(languages.notes.addText[lang], `notes.addText.${lang}`)}
        </TextC>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  favorites: state.favorites,
  lang: state.language,
  notes: state.notes,
  theme: state.theme,
})

const mapDispatchToProps = {
  toggleFavorite: ACTIONS.toggleFavorite,
  deleteNote: ACTIONS.deleteNote,
  addNote: ACTIONS.addNote,
}

export const Notes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesComponent)
