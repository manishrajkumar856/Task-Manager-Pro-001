import React from 'react'
import { useForm } from 'react-hook-form'
import { getMe, loginUser, registerUser } from '../service/auth.api';
import { useDispatch } from "react-redux";
import { addUser } from '../state/auth.slice';
import { getMeThunk, loginThunk, registerThunk } from '../state/auth.thunk';

const useAuth = () => {

    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onLoginSubmit = async (data) => {

        dispatch(
            loginThunk({
                email: data.email,
                password: data.password
            })
        )
        reset();
    }

    const onRegisterSubmit = async (data) => {

        dispatch(
            registerThunk({
                name: data.name,
                email: data.email,
                password: data.password
            })
        )
        reset();
    }

    const getMeHandler = async () => {
        dispatch(getMeThunk());
    }

    const continueWithGoogle = () => {
        window.location.href =
            "http://localhost:3000/api/auth/google";
    }


    return {
        register,
        handleSubmit,
        errors,
        reset,
        onLoginSubmit,
        onRegisterSubmit,
        getMeHandler,
        continueWithGoogle
    }
}

export default useAuth