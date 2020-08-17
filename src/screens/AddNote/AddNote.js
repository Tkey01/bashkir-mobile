import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, TextInput, Image } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import { encode } from 'base-64'

import { ScreenWrapper } from '../../components/ScreenWrapper'
import { TextC } from '../../components/TextC'
import { Drawer } from '../../components/Drawer'
import { ColorPicker } from '../../components/ColorPicker'
import * as ACTIONS from '../../redux/actions'
import { Controllers } from './Controllers'
import { Title } from './Title'
import {
  CONTENT_TEXT,
  CONTENT_IMAGE,
  CONTENT_CONTAINER,
  TEXT_INPUT,
} from './styles'
import { createNoteTitle } from '../../helpers/createNoteTitle'

const Elem = ({ elem, onSave, color }) => {
  if (elem.type === 'text') {
    return <TextC style={CONTENT_TEXT}>{elem.content}</TextC>
  } else if (elem.type === 'image') {
    return (
      <Image
        style={CONTENT_IMAGE}
        resizeMode="contain"
        source={{ uri: elem.content }}
      />
    )
  } else if (elem.type === 'drawer') {
    return <Drawer onSave={onSave} color={color} />
  }
}

export const AddNoteComponent = ({
  route,
  lang,
  addNote,
  editNote,
  favorites,
  theme,
  toggleFavorite,
  navigation,
}) => {
  const initTittle =
    (route.params && route.params.note.title) || createNoteTitle(lang)
  const initElements = route.params && route.params.note.elements

  const [elements, setElements] = useState(initElements || [])
  const [currentTitle, setCurrentTitle] = useState(initTittle)
  const [titleEditing, setTitleEditing] = useState(false)

  const [currentColor, setCurrentColor] = useState('black')
  const [colorEditing, setColorEditing] = useState(false)

  const [editing, toggleEditing] = useState(false)
  const [actionType, setActionType] = useState('')
  const [currentText, setCurrentText] = useState('')

  const pushElement = ({ type, content }) => {
    let newElements = [...elements]
    newElements.push({ type, content })

    setElements(newElements)
  }

  const attachImage = () => {
    if (!editing) {
      toggleEditing(true)
      setActionType('attach-image')

      ImagePicker.openPicker({})
        .then((image) => {
          pushElement({ type: 'image', content: image.path })
          toggleEditing(false)
          setActionType('')
        })
        .catch((err) => {
          console.log('Error while trying to attach image', err)
          toggleEditing(false)
          setActionType('')
        })
    }
  }

  const onKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Backspace' && currentText === '') {
      let newElements = [...elements]
      const deletedElem = newElements.pop()

      if (deletedElem && deletedElem.type === 'text') {
        setCurrentText(deletedElem.content)
      }

      setElements(newElements)
      toggleEditing(false)
      setActionType('')
    }
  }

  const onBlurTextInput = () => {
    if (!editing && currentText !== '') {
      pushElement({ type: 'text', content: currentText })
      setCurrentText('')
    }
  }

  const onSaveDrawer = (err, res) => {
    let newElements = [...elements]

    if (err) {
      console.log('Error while trying save drawer')
      newElements.pop()

      setElements(newElements)
      toggleEditing(false)
      setActionType('')

      return
    }

    newElements.pop()
    newElements.push({
      type: 'image',
      content: `data:image/png;base64,${res}`,
    })
    setElements(newElements)
    toggleEditing(false)
    setActionType('')
  }

  const attachDrawingImage = () => {
    if (!editing) {
      toggleEditing(true)
      setActionType('draw')
      pushElement({ type: 'drawer' })
    } else if (actionType === 'draw') {
      let newElements = [...elements]
      newElements.pop()

      setElements(newElements)
      toggleEditing(false)
      setActionType('')
    }
  }

  const onPressTitleEdit = () => {
    setTitleEditing(!titleEditing)
  }

  const onBlurTitleInput = () => {
    setTitleEditing(false)
  }

  const onSelectColor = (c) => {
    setColorEditing(false)
    setCurrentColor(c)
  }

  const onPressPalette = () => {
    setColorEditing(!colorEditing)
  }

  const onPressFavor = () => {
    if (route.name !== 'AddNote') {
      toggleFavorite(route.name)
    }
  }

  const saveNote = () => {
    if (route.name === 'AddNote') {
      addNote({
        title: currentTitle,
        routeName: `Note-${encode(Date.now())}`,
        elements,
      })
    } else {
      editNote({
        title: currentTitle,
        routeName: route.name,
        elements,
      })
    }

    navigation.goBack()
  }

  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 40,
        paddingHorizontal: 16,
      }}
    >
      <Controllers
        theme={theme}
        favorites={favorites}
        route={route}
        actionType={actionType}
        colorEditing={colorEditing}
        attachDrawingImage={attachDrawingImage}
        saveNote={saveNote}
        onPressPalette={onPressPalette}
        attachImage={attachImage}
        onPressFavor={onPressFavor}
      />
      <View style={CONTENT_CONTAINER}>
        {colorEditing && <ColorPicker onChange={onSelectColor} />}

        <Title
          theme={theme}
          currentTitle={currentTitle}
          setCurrentTitle={setCurrentTitle}
          onPressTitleEdit={onPressTitleEdit}
          titleEditing={titleEditing}
          onBlurTitleInput={onBlurTitleInput}
        />

        {elements.map((elem, index) => (
          <Elem
            key={index}
            elem={elem}
            onSave={elem.type === 'drawer' ? onSaveDrawer : null}
            color={elem.type === 'drawer' ? currentColor : null}
          />
        ))}

        <TextInput
          onBlur={onBlurTextInput}
          value={currentText}
          onChangeText={setCurrentText}
          multiline
          blurOnSubmit
          onKeyPress={onKeyPress}
          placeholderTextColor={theme === 'light' ? '#505050' : '#fff'}
          style={[
            TEXT_INPUT,
            {
              color: theme === 'light' ? '#505050' : '#fff',
            },
          ]}
          placeholder=">"
        />
      </View>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  favorites: state.favorites,
  theme: state.theme,
  lang: state.language,
})

const mapDispatchToProps = {
  addNote: ACTIONS.addNote,
  editNote: ACTIONS.editNote,
  toggleFavorite: ACTIONS.toggleFavorite,
}

export const AddNote = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNoteComponent)
