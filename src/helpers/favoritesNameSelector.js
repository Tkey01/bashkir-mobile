import { languages } from '../global/languages'

export const favoritesNameSelector = (screenName) => {
  if (screenName.includes('Description')) {
    return languages.nestedRoutes.desc
  } else if (screenName.includes('Sources')) {
    return languages.nestedRoutes.sources
  } else if (screenName.includes('Stuff')) {
    return languages.nestedRoutes.stuff
  } else if (screenName.includes('Tech')) {
    return languages.nestedRoutes.tech
  } else if (screenName.includes('Tools')) {
    return languages.nestedRoutes.sources
  } else if (screenName.includes('Video')) {
    return languages.nestedRoutes.video
  } else {
    return languages.screens[screenName]
  }
}
