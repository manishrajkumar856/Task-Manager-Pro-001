import React from 'react'
import { useForm } from 'react-hook-form'
import { getMe, loginUser, registerUser } from '../service/auth.api';
import { useDispatch } from "react-redux";
import { addUser } from '../state/auth.slice';

const useAuth = () => {

    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onLoginSubmit = async (data) => {
        try {
            const response = await loginUser({ email: data.email, password: data.password });
            dispatch(addUser(response.user));
        } catch (error) {
            console.log(error);
        }
        reset();
    }

    const onRegisterSubmit = async (data) => {
        try {
            const response = await registerUser({ name: data.name, email: data.email, password: data.password });
            console.log(response);
            dispatch(addUser(response.user));
        } catch (error) {
            console.log(error);
        }
        reset();
    }

    const getMeHandler = async () => {
            try {
                const response = await getMe();
                console.log(response);
                dispatch(addUser(response.user));
            } catch (error) {
                console.log(error);
            }
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