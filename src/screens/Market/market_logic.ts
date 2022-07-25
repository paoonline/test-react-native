import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


interface marketType {
    error: number,
    result: any,
    loading?: boolean
}

const initialState: marketType  = {
    loading: false,
    result: null,
    error: 0,
}

export const fetchMarket = createAsyncThunk(
  'market/fetchMarket', 
  async ()  =>{
    let response = await axios.get('https://mobileapi.bitkub.com/mobile-api/market/ticker')
    return response.data  as marketType
  },
)

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarket.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchMarket.fulfilled, (state,  action: PayloadAction<marketType>) => {

        state.result = action.payload
        state.loading = false
      })
      .addCase(fetchMarket.rejected, (state, action) => {
        state.loading = true
      })
  }
})

export const {  } = marketSlice.actions

export default marketSlice.reducer