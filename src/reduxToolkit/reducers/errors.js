import { createSlice } from '@reduxjs/toolkit';
import { fetchRecords } from '../thunks/records';

const errorsSlice = createSlice({
    name: 'errors',
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecords.rejected, (state, { error }) => {
            window.alert(error.message);
        });
    },
});

export default errorsSlice.reducer;
