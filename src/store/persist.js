import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'persist',
    initialState: {
        walletAddress: '',
        walletToken: ''
    },
    reducers: {
        setWalletAddress: (state, action) => {
            state.walletAddress = action.payload
        },
        setWalletToken: (state, action) => {
            state.walletToken = action.payload
        }
    }
})
export const { setWalletToken } = counterSlice.actions
export default counterSlice.reducer
