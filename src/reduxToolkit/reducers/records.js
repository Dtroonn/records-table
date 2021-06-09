import { createSlice } from '@reduxjs/toolkit';
import { fetchRecords, createRecord, deleteRecord, updateRecord } from '../thunks/records';

const recordsSlice = createSlice({
    name: 'records',
    initialState: {
        items: [],
        isLoaded: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecords.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.isLoaded = true;
            })

            .addCase(createRecord.fulfilled, (state, { payload }) => {
                state.items.unshift(payload);
            })

            .addCase(deleteRecord.fulfilled, (state, { payload }) => {
                state.items = state.items.filter((item) => item.id !== payload);
            })

            .addCase(updateRecord.fulfilled, (state, { payload }) => {
                const item = state.items.find((item) => item.id === payload.id);
                Object.assign(item, payload);
            });
    },
});

export default recordsSlice.reducer;
