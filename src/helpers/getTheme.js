import { ThemeColors } from '../global/themes'

export const getTheme = (mode) => {
  let Theme = {}
  for (let key in ThemeColors) {
    Theme[key] = ThemeColors[key][mode]
  }
  return Theme
}
