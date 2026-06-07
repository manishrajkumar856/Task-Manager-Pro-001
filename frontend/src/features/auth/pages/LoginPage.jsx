import React from 'react'
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';
import { useSelector } from 'react-redux';

const LoginPage = () => {

    const { register, reset, errors, handleSubmit, onLoginSubmit } = useAuth();


    return (
        <main className='w-full min-h-screen bg-black text-white flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-semibold'>Welcome back</h1>
                <p className='text-gray-300'>Don't have an account? <span><Link to={'/register'} className='font-medium text-blue-400'>Register</Link></span></p>


                <form onSubmit={handleSubmit(onLoginSubmit)} className='w-90 flex flex-col justify-center items-center gap-3 mt-5'>
                    <div className='w-full flex flex-col gap-2'>
                        <label className='text-sm text-gray-300'>Email</label>
                        <input
                            type='email'
                            {...register("email", {
                                required: "Email is required"
                            })}
                            placeholder='John@xyz.com'
                            className='w-full px-5 py-2 border rounded-xl'
                        />
                        {/* <p>Error !</p> */}
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <label className='text-sm text-gray-300'>Password</label>
                        <input
                            {...register("password", {
                                required: "Password is required"
                            })}
                            type='password'
                            placeholder='Password'
                            className='w-full px-5 py-2 border rounded-xl'
                        />
                        {/* <p>Error !</p> */}
                    </div>

                    <div className='w-full'>
                        <Link className='text-blue-300'>Forget password</Link>
                    </div>

                    <button type='submit' className='w-full bg-blue-500 py-2 rounded-2xl font-semibold'>Login</button>

                </form>

            </div>
        </main>
    )
}

export default LoginPage