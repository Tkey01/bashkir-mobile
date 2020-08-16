import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'

import { ScreenWrapper } from '../components/ScreenWrapper'
import { IconC } from '../components/IconC'
import { TextC } from '../components/TextC'
import { Drawer } from '../components/Drawer'
import { ColorPicker } from '../components/ColorPicker'
import * as ACTIONS from '../redux/actions'
import { encode } from 'base-64'

const CONTROLLERS_CONTAINER = {
  padding: 10,
  justifyContent: 'space-between',
  flexDirection: 'row',
  borderWidth: 1,
  borderColor: '#3269C8',
  borderRadius: 8,
}

const ICON = {
  width: 40,
  height: 40,
  lineHeight: 40,
  textAlign: 'center',
}

const ICON_ACTIVE = {
  backgroundColor: '#dae5f9',
  borderRadius: 6,
}

const TITLE_CONTAINER = {
  flexDirection: 'row',
  alignItems: 'center',
}

const CONTENT_CONTAINER = {
  flex: 1,
  marginTop: 8,
  padding: 10,
}

const TITLE_TEXT = {
  fontSize: 12,
  marginLeft: 20,
}

const CONTENT_TEXT = {
  // marginTop: 20,
}

const CONTENT_IMAGE = {
  marginTop: 20,
  height: 200,
}

const TITLE_INPUT = {
  borderWidth: 1,
  borderColor: '#bebebe',
  height: 30,
  paddingVertical: 0,
  paddingHorizontal: 20,
  fontSize: 12,
  marginLeft: 20,
}

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

const withDumbZero = (number) => (number > 9 ? number : `0${number}`)

const getDateString = () => {
  const date = new Date()
  const day = withDumbZero(date.getDate())
  const month = withDumbZero(date.getMonth() + 1)
  const year = date.getFullYear()
  const hours = withDumbZero(date.getHours())
  const minutes = withDumbZero(date.getMinutes())

  return `Заметка от ${day}.${month}.${year} ${hours}:${minutes}`
}

export const AddNoteComponent = ({
  route,
  addNote,
  editNote,
  favorites,
  toggleFavorite,
  navigation,
}) => {
  const initTittle = route.params && route.params.note.title
  const initElements = route.params && route.params.note.elements

  const [elements, setElements] = useState(initElements || [])
  const [currentTitle, setCurrentTitle] = useState(
    initTittle || getDateString(),
  )
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
      newElements.pop()

      setElements(newElements)
      toggleEditing(false)
      setActionType('')
    }
  }

  const onBlur = () => {
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
      content: `data:image/jpg;base64,${res}`,
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

  const onSelectColor = (c) => {
    console.log(c)
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
    <ScreenWrapper style={{ paddingHorizontal: 16, paddingTop: 40 }}>
      <View style={CONTROLLERS_CONTAINER}>
        {/* <IconC name="pencil" size={20} style={ICON} /> */}
        <TouchableOpacity onPress={attachDrawingImage}>
          <IconC
            name="wave-sine"
            size={20}
            style={[ICON, actionType === 'draw' ? ICON_ACTIVE : null]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={saveNote}>
          <IconC name="save" size={20} style={ICON} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPalette}>
          <IconC
            name="palette"
            size={20}
            style={[ICON, colorEditing ? ICON_ACTIVE : null]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={attachImage}>
          <IconC
            name="paperclip"
            size={20}
            style={[ICON, actionType === 'attach-image' ? ICON_ACTIVE : null]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressFavor}>
          <IconC
            name="bookmark"
            size={20}
            style={ICON}
            solid={favorites[route.name]}
          />
        </TouchableOpacity>
      </View>
      <View style={CONTENT_CONTAINER}>
        {colorEditing && <ColorPicker onChange={onSelectColor} />}

        <View style={TITLE_CONTAINER}>
          <TouchableOpacity onPress={onPressTitleEdit}>
            <IconC
              name="text"
              size={20}
              style={[ICON, titleEditing ? ICON_ACTIVE : null]}
            />
          </TouchableOpacity>
          {titleEditing ? (
            <TextInput
              value={currentTitle}
              onChangeText={setCurrentTitle}
              style={TITLE_INPUT}
            />
          ) : (
            <TextC color="gray" style={TITLE_TEXT}>
              {currentTitle}
            </TextC>
          )}
        </View>
        {elements.map((elem, index) => (
          <Elem
            key={index}
            elem={elem}
            onSave={elem.type === 'drawer' ? onSaveDrawer : null}
            color={elem.type === 'drawer' ? currentColor : null}
          />
        ))}

        <TextInput
          onBlur={onBlur}
          value={currentText}
          onChangeText={setCurrentText}
          multiline
          blurOnSubmit
          onKeyPress={onKeyPress}
          style={CONTENT_TEXT}
          placeholder=">"
        />
      </View>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  favorites: state.favorites,
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
