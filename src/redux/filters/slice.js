import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  features: [],
  transmission: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
    setForm: (state, { payload }) => {
      state.form = payload;
    },
    toggleFeature: (state, { payload }) => {
      state.features = state.features.includes(payload)
        ? state.features.filter(f => f !== payload)
        : [...state.features, payload];
    },
    setTransmission: (state, { payload }) => {
      state.transmission = payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setLocation, setForm, toggleFeature, resetFilters, setTransmission } =
  filtersSlice.actions;

export default filtersSlice.reducer;
