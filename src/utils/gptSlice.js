import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleShowGPTSearch: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults; 
        }
    }
})

export const { toggleShowGPTSearch, addMovieResults } = gptSlice.actions;
export default gptSlice.reducer;