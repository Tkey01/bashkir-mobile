import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { devToolsEnhancer } from 'redux-devtools-extension'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

import { reducers } from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  blacklist: [''],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, devToolsEnhancer('Awesome'))

export const persistor = persistStore(store)
