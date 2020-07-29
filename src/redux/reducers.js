import * as TYPES from './constants'
import { createReducer } from '../helpers'

const initialState = {
  language: 'ru',
  favorites: {
    Main: true,
    Bort: true,
  },
}

const selectLanguage = (state, { language }) => ({
  ...state,
  language,
})

const toggleFavorite = ({ favorites, ...state }, { favoriteName }) => {
  return {
    ...state,
    favorites: {
      ...favorites,
      [favoriteName]: !favorites[favoriteName],
    },
  }
}

const handlers = {
  [TYPES.SELECT_LANGUAGE]: selectLanguage,
  [TYPES.TOGGLE_FAVORITE]: toggleFavorite,
}

export const reducers = createReducer(initialState, handlers)
