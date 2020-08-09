import { languages } from '../global/languages'
import { getLangText } from './getLangText'

export const routesNameSelector = (screenName, lang) => {
  console.log(screenName, lang)
  if (screenName.includes('Description')) {
    return getLangText(
      languages.nestedRoutes.desc[lang],
      `nestedRoutes.desc.${lang}`,
    )
  } else if (screenName.includes('Sources')) {
    return getLangText(
      languages.nestedRoutes.sources[lang],
      `nestedRoutes.sources.${lang}`,
    )
  } else if (screenName.includes('Stuff')) {
    return getLangText(
      languages.nestedRoutes.stuff[lang],
      `nestedRoutes.stuff.${lang}`,
    )
  } else if (screenName.includes('Tech')) {
    return getLangText(
      languages.nestedRoutes.tech[lang],
      `nestedRoutes.tech.${lang}`,
    )
  } else if (screenName.includes('Tools')) {
    return getLangText(
      languages.nestedRoutes.tools[lang],
      `nestedRoutes.tools.${lang}`,
    )
  } else if (screenName.includes('Video')) {
    return getLangText(
      languages.nestedRoutes.video[lang],
      `nestedRoutes.video.${lang}`,
    )
  } else {
    return getLangText(
      languages.routes[screenName][lang],
      `routes.${screenName}.${lang}`,
    )
  }
}
