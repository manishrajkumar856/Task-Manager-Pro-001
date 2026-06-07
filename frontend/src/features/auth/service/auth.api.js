import { axiosInstance } from "../../../config/AxiosInstance"

export const registerUser = async ({name, email, password}) => {
    try {
        const response = await axiosInstance.post('/auth/register', {name, email, password});

        return response.data;
    } catch (error) {
        throw error?.response?.data?.message || error.message;
    }
}

export const loginUser = async ({email, password}) => {
    try {
        const response = await axiosInstance.post('/auth/login', {email, password});

        return response.data;
    } catch (error) {
        throw error?.response?.data?.message || error.message;
    }
}

export const getMe = async () => {
    try {
        const response = await axiosInstance.get('/auth/me');
        
        return response.data;
    } catch (error) {
        throw error?.response?.data?.message || error.message;
    }
}