import { createSlice } from '@reduxjs/toolkit';

export interface CarState {
    name: string,
    price: number,
    make: string,
    model: string,
    year: number
    
}

const initialState: CarState = {
    name: 'Droney McDroneFace',
    price: 0,
    make: '',
    model: '',
    year: 0
    
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload }
        
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const {
    chooseName,
    choosePrice,
    chooseMake,
    chooseModel,
    chooseYear
    
} = rootSlice.actions;