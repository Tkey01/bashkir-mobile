import { languages } from '../global/languages'
import { getLangText } from './getLangText'

export const routesNameSelector = (screenName, lang) => {
  if (screenName.includes('Description')) {
    return getLangText(
      languages.nestedRoutes.Description[lang],
      `nestedRoutes.description.${lang}`,
    )
  } else if (screenName.includes('Sources')) {
    return getLangText(
      languages.nestedRoutes.Sources[lang],
      `nestedRoutes.sources.${lang}`,
    )
  } else if (screenName.includes('Stuff')) {
    return getLangText(
      languages.nestedRoutes.Stuff[lang],
      `nestedRoutes.stuff.${lang}`,
    )
  } else if (screenName.includes('Tech')) {
    return getLangText(
      languages.nestedRoutes.Tech[lang],
      `nestedRoutes.tech.${lang}`,
    )
  } else if (screenName.includes('Tools')) {
    return getLangText(
      languages.nestedRoutes.Tools[lang],
      `nestedRoutes.tools.${lang}`,
    )
  } else if (screenName.includes('Video')) {
    return getLangText(
      languages.nestedRoutes.Video[lang],
      `nestedRoutes.video.${lang}`,
    )
  } else if (screenName.includes('Note-')) {
    return 'Заметка'
  } else {
    return getLangText(
      languages.routes[screenName][lang],
      `routes.${screenName}.${lang}`,
    )
  }
}
