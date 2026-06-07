import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMeThunk, loginThunk, registerThunk } from './auth.thunk';

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) =>{
        builder
        
        // .addCase(loginThunk.pending, (state)=>{
        //     state.loading = true;
        // })

        // .addCase(loginThunk.fulfilled, (state, action)=>{
        //     state.loading = false;
        //     state.user = action.payload;
        // })

        // .addCase(loginThunk.rejected, (state, action) =>{
        //     state.loading = false;
        //     state.error = action.payload;
        // })

        // Fullfiled Matcher
        .addMatcher(
            isAnyOf(
                loginThunk.fulfilled,
                registerThunk.fulfilled,
                getMeThunk.fulfilled
            ),

            (state, action) => {
                state.loading = false,
                state.user = action.payload
            }
        )

        // Pending Matcher
        .addMatcher(
            isAnyOf(
                loginThunk.pending,
                registerThunk.pending,
                getMeThunk.pending
            ),

            (state, action) => {
                state.loading = true,
                state.user = null
            }
        )



        // Rejected Matcher
        .addMatcher(
            isAnyOf(
                loginThunk.rejected,
                registerThunk.rejected,
                getMeThunk.rejected
            ),

            (state) =>{
                state.loading = false,
                state.user = null
            }
        )
    }
});

export const {addUser} = authSlice.actions;