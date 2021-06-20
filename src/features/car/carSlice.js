import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: [
        "Model S", "Model Y", "Model 3", "Model X"
    ]
}

const carSlice = createSlice({
    name:"car",
    initialState:initialState,
    reducers: {}
});

export const selectCars = state => state.car.cars

export default carSlice.reducer