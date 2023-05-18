import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'store',
    initialState: {
        importantList: ''
    },
    reducers: {
        setImportantList: (state, action) => {
            state.importantList = action.payload
        }
    }
})
export const { setImportantList } = counterSlice.actions
export default counterSlice.reducer
