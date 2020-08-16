import bortIcon from '../assets/images/bort-icon.png'
import shorIcon from '../assets/images/shor-icon.png'
import voilIcon from '../assets/images/voil-icon.png'
import textileIcon from '../assets/images/textile-icon.png'
import woodIcon from '../assets/images/wood-icon.png'
import berestIcon from '../assets/images/berest-icon.png'
import appIcon from '../assets/images/app-icon.png'
import editIcon from '../assets/images/edit-icon.png'

export const iconSelector = (routeName) => {
  if (routeName.includes('Bort')) {
    return bortIcon
  } else if (routeName.includes('Shor')) {
    return shorIcon
  } else if (routeName.includes('Voil')) {
    return voilIcon
  } else if (routeName.includes('Textile')) {
    return textileIcon
  } else if (routeName.includes('Wood')) {
    return woodIcon
  } else if (routeName.includes('Berest')) {
    return berestIcon
  } else if (routeName.includes('Note-')) {
    return editIcon
  } else {
    return appIcon
  }
}
