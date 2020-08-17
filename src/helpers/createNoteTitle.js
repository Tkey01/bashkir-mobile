import { getLangText } from './getLangText'
import { languages } from '../global/languages'

const withDumbZero = (number) => (number > 9 ? number : `0${number}`)

export const createNoteTitle = (lang) => {
  console.log('createNoteTitle', lang)
  const date = new Date()
  const day = withDumbZero(date.getDate())
  const month = withDumbZero(date.getMonth() + 1)
  const year = date.getFullYear()
  const hours = withDumbZero(date.getHours())
  const minutes = withDumbZero(date.getMinutes())
  const preText = getLangText(
    languages.notes.defaultTitle[lang],
    `notes.defaultTitle.${lang}`,
  )

  return `${preText} ${day}.${month}.${year} ${hours}:${minutes}`
}
