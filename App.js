import React from 'react'
import { Provider } from 'react-redux'

import { store } from './src/redux/store'
import { Navigator } from './src/navigation'
import { ThemeProvider } from './src/components/ThemeProvider'

export const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  </Provider>
)
