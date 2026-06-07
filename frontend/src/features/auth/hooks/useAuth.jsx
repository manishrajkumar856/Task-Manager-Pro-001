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


    return {
        register,
        handleSubmit,
        errors,
        reset,
        onLoginSubmit,
        onRegisterSubmit,
        getMeHandler
    }
}

export default useAuth