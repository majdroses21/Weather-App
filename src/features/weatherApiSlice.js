import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk("fetchWeather", async () => {
    const link = `https://api.open-meteo.com/v1/forecast?latitude=35.3621&longitude=35.9276&current=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m,uv_index&timezone=auto&past_hours=6`;
    // Links For Testing
    // const link = `https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6173&current=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m,uv_index&timezone=auto&past_hours=6`;
    // const link = `https://api.open-meteo.com/v1/forecast?latitude=64.1466&longitude=-21.9426&current=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m,uv_index&timezone=auto&past_hours=6`;

    const response = await axios.get(link, {
        // cancelToken: new axios.CancelToken((c) => {
        //     cancelAxios = c;
        // }),
    }
    );
    // handling success
    return response.data
})

const weatherApiSlice = createSlice({
    name: 'weatherApi',

    initialState: {
        result: 'empty',
        weather: {
            
        },
        isLoading: false,
        error: null
    },

    reducers: {
        changeResult: (state, action) => {
            state.result = 'changed';
        },
    },
    extraReducers(builder){
        builder.addCase(fetchWeather.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        }).addCase(fetchWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.weather = action.payload;
            state.error = null;
        }).addCase(fetchWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }

});

export const { changeResult } = weatherApiSlice.actions; // will used in componnets

export default weatherApiSlice.reducer; // will used in store
