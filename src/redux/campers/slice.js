import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from './operations';

const initialState = {
  items: [],
  camper: {},
  page: 1,
  limit: 4,
  total: 0,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearCampers: state => {
      state.items = [];
      state.page = 1;
      state.total = 0;
      state.error = null;
      state.isLoading = false;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { items, total, page, limit } = action.payload;

        if (page === 1) {
          state.items = items;
        } else {
          state.items = [...state.items, ...items];
        }

        state.page = page;
        state.limit = limit;
        state.total = total;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const { clearCampers } = slice.actions;
export default slice.reducer;
