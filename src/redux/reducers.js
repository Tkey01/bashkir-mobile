import * as TYPES from './constants'
import { createReducer } from '../helpers'

const initialState = {
  language: 'ru', // ru | en | bash
  theme: 'light', // dark | light
  scale: 1, // 0.8 | 0.85 | 0.9 | 0.95 | 1 | 1.05 | 1.10 | 1.15 | 1.2
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

const setScale = (state, { scale }) => ({
  ...state,
  scale,
})

const toggleTheme = (state) => ({
  ...state,
  theme: state.theme === 'light' ? 'dark' : 'light',
})

const handlers = {
  [TYPES.SELECT_LANGUAGE]: selectLanguage,
  [TYPES.TOGGLE_FAVORITE]: toggleFavorite,
  [TYPES.SET_SCALE]: setScale,
  [TYPES.TOGGLE_THEME]: toggleTheme,
}

export const reducers = createReducer(initialState, handlers)
