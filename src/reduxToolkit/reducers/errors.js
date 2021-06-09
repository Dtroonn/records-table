import { createSlice } from '@reduxjs/toolkit';
import { fetchRecords, createRecord, updateRecord, deleteRecord } from '../thunks/records';

const handleSetErrorPopup = (state, action) => {
    state.errorPopup.isActive = action.isActive;
    state.errorPopup.message = action.message;
};

const errorsSlice = createSlice({
    name: 'errors',
    initialState: {
        errorPopup: {
            isActive: false,
            message: '',
        },
    },
    reducers: {
        setErrorPopup: {
            reducer: handleSetErrorPopup,
            prepare: (isActive, message = '') => {
                return {
                    payload: {
                        isActive,
                        message,
                    },
                };
            },
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecords.rejected, (state, { error }) => {
                handleSetErrorPopup(state, { isActive: true, message: error.message });
            })

            .addCase(createRecord.rejected, (state, { error }) => {
                handleSetErrorPopup(state, { isActive: true, message: error.message });
            })

            .addCase(deleteRecord.rejected, (state, { error }) => {
                handleSetErrorPopup(state, { isActive: true, message: error.message });
            })
            .addCase(updateRecord.rejected, (state, { error }) => {
                handleSetErrorPopup(state, { isActive: true, message: error.message });
            });
    },
});

export const { setErrorPopup } = errorsSlice.actions;
export default errorsSlice.reducer;
