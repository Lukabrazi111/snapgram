import AuthLayout from '@/layouts/AuthLayout';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';
import {
    Link,
    type NavigateFunction,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import FieldError from '@/components/form/FieldError.tsx';
import type { AxiosError } from 'axios';
import axios from '@/configs/axios.tsx';

interface LoginFormInputs {
    email: string;
    password: string;
}

type ApiErrorResponse = {
    message: string;
};

export default function Login() {
    const location = useLocation();
    const [backendErrorMessage, setBackendErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate: NavigateFunction = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const pwdWatcher: string = watch('password');

    useEffect(() => {
        if (location.state?.message) {
            toast.success(location.state.message);
            window.history.replaceState({}, document.title);
        }

        // Remove backend error message while typing password input.
        if (pwdWatcher) {
            setBackendErrorMessage('');
        }
    }, [location.state, pwdWatcher]);

    const handleLogin: SubmitHandler<LoginFormInputs> = async (
        data: LoginFormInputs,
    ) => {
        setIsLoading(true);
        try {
            const response = await axios.post('/login', data);
            if (response.status === 200) {
                // Save token and user inside storage.

                navigate('/', {
                    state: { message: `Hello ${response.data.user.name}!` },
                });
            }
        } catch (error) {
            const err = error as AxiosError<ApiErrorResponse>;
            if (err.response?.status === 401) {
                setBackendErrorMessage(err.response?.data?.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout>
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="text-white w-full max-w-md"
            >
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-center items-center mb-10">
                        <img
                            src="/images/logo.svg"
                            alt="snapgram-logo"
                            className="w-42 h-auto object-contain object-center"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <h1 className="text-3xl font-bold">
                            Log in to your account
                        </h1>
                        <p className="text-md text-muted">
                            Welcome back! Please enter your details.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <InputField
                                {...register('email', {
                                    required: 'Email field is required.',
                                })}
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                            />
                            {errors.email && (
                                <FieldError message={errors.email?.message} />
                            )}
                        </div>
                        <div>
                            <InputField
                                {...register('password', {
                                    required: 'Password field is required.',
                                })}
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                            />
                            {errors.password && (
                                <FieldError
                                    message={errors.password?.message}
                                />
                            )}
                            {backendErrorMessage && (
                                <FieldError message={backendErrorMessage} />
                            )}
                        </div>
                        <Button
                            label={
                                isLoading && !backendErrorMessage
                                    ? 'Login...'
                                    : 'Login'
                            }
                            type="submit"
                            disabled={isLoading && !backendErrorMessage}
                        />
                    </div>

                    <div className="flex flex-col space-y-2 mt-4 text-center">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/register" className="text-primary">
                                Register
                            </Link>
                        </p>
                        <p>
                            Forgot password?{' '}
                            <Link
                                to="/forgot-password"
                                className="text-primary"
                            >
                                Reset password
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
            <ToastContainer transition={Slide} closeOnClick={true} />
        </AuthLayout>
    );
}
