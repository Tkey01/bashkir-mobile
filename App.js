import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/redux/store'
import { Navigator } from './src/navigation'
import { ThemeProvider } from './src/components/ThemeProvider'

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)
