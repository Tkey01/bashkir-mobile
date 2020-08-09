import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Image } from 'react-native'

import { TextC } from '../components/TextC'
import { getLangText } from '../helpers/getLangText'
import { languages } from '../global/languages'
import addIcon from '../assets/images/add-icon.png'

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

export const NotesComponent = ({ notes, lang, theme }) => {
  return (
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
      <TouchableOpacity onPress={() => {}} style={ADD_CONTAINER}>
        <Image source={addIcon} style={ADD_ICON} />
        <TextC color="gray" style={{ marginTop: 20 }}>
          {getLangText(languages.notes.addText[lang], `notes.addText.${lang}`)}
        </TextC>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lang: state.language,
  notes: state.notes,
  theme: state.theme,
})

const mapDispatchToProps = {}

export const Notes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesComponent)
