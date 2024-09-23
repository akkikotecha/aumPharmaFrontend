// Third-party Imports
import { configureStore } from '@reduxjs/toolkit'
 
import usersSlice from "../lib/features/userSlice"
// Slice Imports
export const store = configureStore({
  reducer: {

    user: usersSlice,

  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch