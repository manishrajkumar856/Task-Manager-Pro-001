import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Public from './protected/Public'
import Protected from './protected/Protected'
import AuthLayouts from '../layouts/AuthLayouts'
import MainLayouts from '../layouts/MainLayouts'
import LoginPage from '../features/auth/pages/LoginPage'
import RegisterPage from '../features/auth/pages/RegisterPage'
import { useEffect } from 'react'
import useAuth from '../features/auth/hooks/useAuth'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Public />,
        children: [
            {
                path: "",
                element: <AuthLayouts />,
                children: [
                    {
                        path: "",
                        element: <LoginPage />
                    },
                    {
                        path: "register",
                        element: <RegisterPage />
                    }
                ]
            }
        ]
    },
    {
        path: "/home",
        element: <Protected />,
        children: [
            {
                path: "",
                element: <MainLayouts />,
                children: [
                    {
                        path: "",
                        element: <h1>Home</h1>
                    }
                ]
            }
        ]
    }
])

export const AppRoutes = () => {
    const { getMeHandler } = useAuth();

    useEffect(()=>{
        getMeHandler();
        
    }, []);


    return (
        <RouterProvider router={router} />
    )
}
