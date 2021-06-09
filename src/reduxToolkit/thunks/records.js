import { createAsyncThunk } from '@reduxjs/toolkit';
import { recordsAPI } from '../../api';

export const fetchRecords = createAsyncThunk('records/fetchRecords', async () => {
    const response = await recordsAPI.getAll();
    return response.data;
});

export const createRecord = createAsyncThunk('records/createRecord', async (data) => {
    const response = await recordsAPI.create(data);
    return response.data;
});

export const deleteRecord = createAsyncThunk('records/deleteRecord', async (id) => {
    await recordsAPI.delete(id);
    return id;
});

export const updateRecord = createAsyncThunk('records/updateRecord', async (data) => {
    const response = await recordsAPI.update(data);
    return response.data;
});
