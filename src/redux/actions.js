import * as TYPES from './constants'

export const selectLanguage = (language) => ({
  type: TYPES.SELECT_LANGUAGE,
  payload: { language },
})

export const toggleFavorite = (favoriteName) => {
  return {
    type: TYPES.TOGGLE_FAVORITE,
    payload: { favoriteName },
  }
}

export const setScale = (scaleIndex) => {
  return {
    type: TYPES.SET_SCALE,
    payload: { scaleIndex },
  }
}

export const setTheme = (theme) => {
  return {
    type: TYPES.TOGGLE_THEME,
    payload: { theme },
  }
}

export const addNote = (note) => {
  return {
    type: TYPES.ADD_NOTE,
    payload: { note },
  }
}

export const deleteNote = (routeName) => {
  return {
    type: TYPES.DELETE_NOTE,
    payload: { routeName },
  }
}

export const editNote = (note) => {
  return {
    type: TYPES.EDIT_NOTE,
    payload: { note },
  }
}
