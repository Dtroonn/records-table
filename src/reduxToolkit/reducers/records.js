import { createSlice } from '@reduxjs/toolkit';
import { fetchRecords } from '../thunks/records';

const recordsSlice = createSlice({
    name: 'records',
    initialState: {
        items: [],
        isLoaded: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecords.fulfilled, (state, { payload }) => {
            state.items = payload;
            state.isLoaded = true;
        });
    },
});

export default recordsSlice.reducer;
