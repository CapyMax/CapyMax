import { configureStore } from '@reduxjs/toolkit'
import headerBgSlice from './slice.ts/page'
const store = configureStore({
    reducer: {
        bgHeader: headerBgSlice.reducer
    }
})
export default store