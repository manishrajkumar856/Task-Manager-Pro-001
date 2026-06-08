import React from 'react'
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';
import { useSelector } from 'react-redux';

const LoginPage = () => {

    const { register, reset, errors, handleSubmit, onLoginSubmit, continueWithGoogle } = useAuth();

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

                <p className='mt-4'>OR</p>

                <div className="w-full mt-5">
                    <button
                        onClick={continueWithGoogle}
                        type="button"
                        className="w-full py-2 border rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 group"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="text-[11px] font-bold  transition-colors uppercase tracking-widest">Continue with Google</span>
                    </button>
                </div>

            </div>
        </main>
    )
}

export default LoginPage