import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Image } from 'react-native'

import { TextC } from '../components/TextC'
import { getLangText } from '../helpers/getLangText'
import { languages } from '../global/languages'
import addIcon from '../assets/images/add-icon.png'
import { ListItem } from '../components/ListItem'
import { ScreenWrapper } from '../components/ScreenWrapper'
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

const FOOTER = {
  backgroundColor: '#fff',
  paddingHorizontal: 16,
  paddingTop: 10,
  height: 100,
}

const ADD_BUTTON = {
  height: 60,
  padding: 10,
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#3269C8',
}

export const NotesComponent = ({
  notes,
  favorites,
  lang,
  theme,
  navigation,
  toggleFavorite,
  deleteNote,
}) => {
  return notes.length ? (
    <View style={{ flex: 1 }}>
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
      <View style={FOOTER}>
        <TouchableOpacity
          style={ADD_BUTTON}
          onPress={() => {
            navigation.navigate('AddNote')
          }}
        >
          <Image source={addIcon} style={ADD_ICON} />
          <TextC style={{ marginLeft: 20 }}>Добавить</TextC>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme === 'light' ? '#fff' : '#222',
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
}

export const Notes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesComponent)
