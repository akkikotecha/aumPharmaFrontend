import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Define an interface for the user
interface User {
  id: number;
  name: string;
  value: string;
}

// Define the initial state type
interface ProductState {
  data: User[];
  editData: User[];
}

// Define the initial state
const initialState: ProductState = {
  data: [],
  editData: []
}

// Create the Slice
const usersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    // Set the entire users data
    setUsersData: (state, action: PayloadAction<User[]>) => {
      state.data = action.payload;
    },

    // Set edit data
    setEditData: (state, action: PayloadAction<User[]>) => {
      state.editData = action.payload;
    }
  }
});

// Export actions and reducer
export const { setUsersData, setEditData } = usersSlice.actions;
export default usersSlice.reducer;
