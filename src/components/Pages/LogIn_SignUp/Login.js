import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // Sign in with Email & Password validation 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        navigate('/appointment');
        console.log(data);
    };

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500 text-sm'>{error?.message || gError?.message}</p>
    }
    if (user || gUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h3 className='text-4xl font-bold text-center mb-2'>Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },

                                pattern: {
                                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                    message: 'Provide a valid email'
                                }
                            })}

                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input
                            type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },

                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 character or longer'
                                }
                            })}

                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>

                        {signInError}
                        <div className="card-actions justify-center">
                            <input className=" btn  w-full max-w-xs" type="submit" value='Login' />
                        </div>
                    </form>
                    <p className='text-sm text-center'>New to Doctors Appointment? <Link className='text-secondary font-bold' to='/signup'>Sign Up</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline" >Sign in with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;