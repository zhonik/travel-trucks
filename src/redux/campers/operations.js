import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api.js';

export const fetchCampers = createAsyncThunk(
  'campers/fethCampers',
  async ({ filters, page = 1, limit = 4 }, thunkAPI) => {
    try {
      const { location = '', form = '', transmission = '', features = [] } = filters;
      const params = { page, limit };

      if (location) params.location = location;
      if (form) params.form = form;
      if (transmission) params.transmission = transmission;

      features.forEach(feature => {
        params[feature] = true;
      });

      const { data } = await api.get('/campers/', { params });
      return {
        items: data.items,
        total: data.total,
        page,
        limit,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk('campers/fetchCamperById', async (id, thunkAPI) => {
  try {
    const { data } = await api.get(`campers/${id}`);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
