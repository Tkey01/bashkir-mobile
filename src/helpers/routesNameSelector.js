import { languages } from '../global/languages'
import { getLangText } from './getLangText'

export const routesNameSelector = (screenName, lang) => {
  if (screenName.includes('Description')) {
    return getLangText(
      languages.nestedRoutes.Description[lang],
      `nestedRoutes.Description.${lang}`,
    )
  } else if (screenName.includes('Sources')) {
    return getLangText(
      languages.nestedRoutes.Sources[lang],
      `nestedRoutes.Sources.${lang}`,
    )
  } else if (screenName.includes('Stuff')) {
    return getLangText(
      languages.nestedRoutes.Stuff[lang],
      `nestedRoutes.Stuff.${lang}`,
    )
  } else if (screenName.includes('Tech')) {
    return getLangText(
      languages.nestedRoutes.Tech[lang],
      `nestedRoutes.Tech.${lang}`,
    )
  } else if (screenName.includes('Tools')) {
    return getLangText(
      languages.nestedRoutes.Tools[lang],
      `nestedRoutes.Tools.${lang}`,
    )
  } else if (screenName.includes('Video')) {
    return getLangText(
      languages.nestedRoutes.Video[lang],
      `nestedRoutes.Video.${lang}`,
    )
  } else if (screenName.includes('Note-')) {
    return getLangText(languages.routes.Note[lang], `routes.Note.${lang}`)
  } else {
    try {
      return getLangText(
        languages.routes[screenName][lang],
        `routes.${screenName}.${lang}`,
      )
    } catch (e) {
      console.log('routeNameSelector - ', screenName, lang)
    }
  }
}
