import { createSlice, createAsyncThunk,  createSelector } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
    currentWeatherLoadingStatus: ''
}

export const fetchCurrentWeather = createAsyncThunk(
    'currentWeather/fetchCurrentWeather',
    async ([apiBase, city, apiKey]) => {
        const request = useHttp();
        return await request(`${apiBase}${city}?${apiKey}&lang=ru&unitGroup=base&include=current,hours`)
    }
)

const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentWeather.pending, state => {
                state.currentWeatherLoadingStatus = 'loading'
            })
            .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
                state.currentWeatherLoadingStatus = 'loaded';
                state.currentConditions = action.payload.currentConditions;
                state.days = action.payload.days;
            })
            .addCase(fetchCurrentWeather.rejected, state => {
                state.currentWeatherLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = currentWeatherSlice;
export default reducer;
export const {currentWeatherFetching, currentWeatherFetched, currentWeatherFetchingError} = actions;