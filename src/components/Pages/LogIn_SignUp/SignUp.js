import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    // Sign Up with Email & Password validation 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
        console.log(data);
    };

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500 text-sm'>{error?.message || gError?.message}</p>
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h3 className='text-4xl font-bold text-center mb-2'>Sign Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label class="label">
                            <span class="label-text">Your Name</span>
                        </label>
                        <input
                            type="name" placeholder="Name" class="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                },
                            })}

                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                        <label class="label">
                            <span class="label-text">Your Email</span>
                        </label>
                        <input
                            type="email" placeholder="Email" class="input input-bordered w-full max-w-xs"
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
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>
                        <label class="label">
                            <span class="label-text">Your Password</span>
                        </label>
                        <input
                            type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
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
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>

                        {signInError}
                        <div className="card-actions justify-center">
                            <input className=" btn  w-full max-w-xs" type="submit" value='Sign Up' />
                        </div>
                    </form>
                    <p className='text-sm text-center'>Already have an Account? <Link className='text-secondary font-bold' to='/login'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline" >Sign in with Google</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;