import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser, getMe } from "../service/auth.api";
import { data } from "react-router";

export const loginThunk = createAsyncThunk(
    'auth/login',

    async (data, thunkApi) => {
        try {
            const response = await loginUser(data);

            return response.user;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message
            );
        }
    }
);

export const registerThunk = createAsyncThunk(
    'auth/register',

    async (data, thunkApi) => {
        try {
            const response = await registerUser(data);

            return response.user;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message
            );
        }
    }
);

export const getMeThunk = createAsyncThunk(
    'auth/getMe',

    async (data, thunkApi) => {
        try {
            const response = await getMe();

            return response.user;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message
            );
        }
    }
);