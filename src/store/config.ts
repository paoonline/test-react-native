import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import counterReducer from '../screens/Home/home_logic'
import marketReducer from '../screens/Market/market_logic'
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    market:  marketReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
