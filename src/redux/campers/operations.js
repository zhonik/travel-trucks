import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api.js';

export const fetchCampers = createAsyncThunk('campers/fethCampers', async (params, thunkAPI) => {
  try {
    const { data } = await api.get('/campers', { params });
    return data.items;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const fetchCamperById = createAsyncThunk('campers/fetchCamperById', async (id, thunkAPI) => {
  try {
    const { data } = await api.get(`campers/${id}`);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
