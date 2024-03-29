import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/redux/store'
import { Navigator } from './src/navigation'
import { Preloader } from './src/components/Preloader'

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Preloader />} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
)
