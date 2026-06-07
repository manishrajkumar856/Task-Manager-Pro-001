import React from 'react';
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';

const RegisterPage = () => {

    const {register, errors, handleSubmit, onRegisterSubmit} = useAuth();

  return (
    <main className='w-full min-h-screen bg-black text-white flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold'>Create account</h1>
            <p className='text-gray-300'>Already have an account? <span><Link to={'/'} className='font-medium text-blue-400'>Login</Link></span></p>


            <form onSubmit={handleSubmit(onRegisterSubmit)} className='w-90 flex flex-col justify-center items-center gap-3 mt-5'>
                <div className='w-full flex flex-col gap-2'>
                    <label className='text-sm text-gray-300'>Name</label>
                    <input 
                        type='text' 
                        {...register("name", {
                            required: "Full name is required"
                        })}
                        placeholder='John Deo'
                        className='w-full px-5 py-2 border rounded-xl'
                    />
                    {/* <p>Error !</p> */}
                </div>

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
                        type='password' 
                        {...register("password", {
                            required: "Password is required"
                        })}
                        placeholder='Password'
                        className='w-full px-5 py-2 border rounded-xl'
                    />
                    {/* <p>Error !</p> */}
                </div>
                <button type='submit' className='w-full mt-3 bg-blue-500 py-2 rounded-2xl font-semibold'>Register</button>

            </form>
        
        </div>
    </main>
  )
}

export default RegisterPage