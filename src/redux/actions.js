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
