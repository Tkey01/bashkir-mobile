import React from 'react'
import { Appearance } from 'react-native-appearance'
import { getTheme } from '../helpers/getTheme'

// set default colour scheme from OS
const osTheme = Appearance.getColorScheme()

// initiate context
export const ManageThemeContext = React.createContext({
  mode: osTheme,
  theme: getTheme(osTheme),
  toggle: () => {},
})

// define useTheme hook for functional components
export const useTheme = () => {
  return React.useContext(ManageThemeContext)
}

// initiate context provider
export class ThemeProvider extends React.Component {
  state = {
    mode: osTheme,
  }

  componentDidUpdate() {}

  toggleTheme = async () => {
    this.state.mode === 'light'
      ? this.setState({
          mode: 'dark',
        })
      : this.setState({
          mode: 'light',
        })
  }

  render() {
    return (
      <ManageThemeContext.Provider
        value={{
          mode: this.state.mode,
          theme: getTheme(this.state.mode),
          toggle: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ManageThemeContext.Provider>
    )
  }
}
