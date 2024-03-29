import { languages } from '../global/languages'

const getTextFromPath = (obj, path) => {
  if (path) {
    const restPath = path.split('.')
    restPath.splice(0, 1)
    const partOfPath = path.split('.').splice(0, 1).join('')
    return getTextFromPath(obj[partOfPath], restPath.join('.'))
  }

  return obj
}

export const getLangText = (elem, path) => {
  try {
    if (elem.length === 0) {
      let newPath = path.split('.')
      newPath.pop()
      newPath.push('rus')
      newPath = newPath.join('.')

      return getTextFromPath(languages, newPath)
    }

    return elem
  } catch (e) {
    console.log('Error getLangText', elem, path, e)
  }
}
