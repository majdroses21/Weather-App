import { createSlice } from "@reduxjs/toolkit";


const weatherApiSlice = createSlice({
    name: 'weatherApi',

    initialState: {
        result: 'empty',
    },

    reducers: {
        changeResult: (state, action) => {
            state.result = 'changed';
        },
    },

});

export const { changeResult } = weatherApiSlice.actions; // will used in componnets

export default weatherApiSlice.reducer; // will used in store
