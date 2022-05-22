import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label class="label">
                            <span class="label-text">Your Email</span>
                        </label>
                        <input
                            type="email" placeholder="Email" class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'error message' // JS only: <p>error message</p> TS only support string
                                }
                            })}
                        // {errors.firstName?.type === 'required' && "First name is required"}

                        />

                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'error message'
                                }
                            })}
                        // {errors.firstName?.type === 'required' && "First name is required"}

                        />
                        <label class="label">
                            <span class="label-text-alt">Forgot Password?</span>
                        </label>

                        <input />


                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>

                    <div className="card-actions justify-center">
                        <button className="btn btn-wide">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline" >Sign in with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;