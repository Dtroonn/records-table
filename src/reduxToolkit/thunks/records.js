import { createAsyncThunk } from '@reduxjs/toolkit';
import { recordsAPI } from '../../api';

export const fetchRecords = createAsyncThunk('records/fetchRecords', async () => {
    const response = await recordsAPI.getAll();
    return response.data;
});
