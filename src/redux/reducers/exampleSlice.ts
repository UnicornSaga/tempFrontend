import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CounterState {
    value: number
  }
  
// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

// User counter reducer as example
export const exampleSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
})

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default exampleSlice.reducer;