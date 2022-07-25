import { createAsyncThunk, createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../../store/config'

// Define a type for the slice state
export interface CounterState extends versionState {
  value: number,
  loading: boolean
}

interface versionState {
  data:{
    version: string,
  }
}

// Define the initial state using that type
const initialState: CounterState  = {
  value: 0,
  loading: false,
  data:{
    version: '0',
  }
}

export const counterAdapter = createEntityAdapter<CounterState>();

export const fetchCounter = createAsyncThunk(
  'counter/fetchCounter', 
  async ()  =>{
    let response = await axios.get('https://www.bitkub.com/static/version.json')

    // // const myService: versionState = new response.data();
    // console.log('test')
    return response.data as versionState
  },
)

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounter.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchCounter.fulfilled, (state,  action: PayloadAction<versionState>) => {
        state.loading = false
        state.data = action.payload.data
        console.log(state)
      })
      .addCase(fetchCounter.rejected, (state, action) => {
        state.loading = true
      })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer