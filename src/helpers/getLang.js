import { languages } from '../global/languages'

export const getLang = (lang) => {
  let LanguagesResult = {}
  for (let key in languages) {
    LanguagesResult[key] = languages[key][lang] && languages[key].rus
  }
  return LanguagesResult
}
