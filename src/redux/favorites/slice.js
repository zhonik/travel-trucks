import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const id = payload;
      if (state.includes(id)) {
        return state.filter(item => item !== id);
      } else {
        state.push(id);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
