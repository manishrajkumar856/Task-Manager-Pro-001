import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
});



axiosInstance.interceptors.response.use(
    (response) => {
        console.log("Axios 01",response);
        return response;
    },
    async (error) =>{
        let originalRequest = error.config;

        if(error.response.status === 401 && !originalRequest.retry && originalRequest.url !== "/auth/generate-access-token"){
            originalRequest.retry = true;
            
            try {
                await axiosInstance.get('/auth/generate-access-token');
                return axiosInstance(originalRequest);    
            } catch (error) {
                console.log(error);
                window.location.href = '/';
                return Promise.reject(error);
            }
        }

        return error;
    }
)

