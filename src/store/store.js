import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import watchlistReducer from './slices/watchlist'

const reducer = {
    auth: authReducer,
    watchlist: watchlistReducer,
  }

const store = configureStore({
    reducer: reducer,
    devTools: true,
  })
  
export default store;