import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false
    },
    reducers: {
        toggleShowGPTSearch: (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const { toggleShowGPTSearch } = gptSlice.actions;
export default gptSlice.reducer;