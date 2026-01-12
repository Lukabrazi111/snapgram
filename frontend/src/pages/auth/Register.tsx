import AuthLayout from '@/layouts/AuthLayout';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';
import FieldError from '@/components/form/FieldError';
import axios from '@/configs/axios';
import { Link, type NavigateFunction, useNavigate } from 'react-router-dom';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Slide, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';
import { useState } from 'react';

interface RegisterFormData {
    name: string;
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}

type ValidationErrors = Record<string, string[]>;

type ApiErrorResponse = {
    message: string;
    errors: ValidationErrors;
};

export default function Register() {
    const navigate: NavigateFunction = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [backendErrors, setBackendErrors] = useState<ValidationErrors>({});

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<RegisterFormData>();

    const onSubmit: SubmitHandler<RegisterFormData> = async (
        data: RegisterFormData,
    ) => {
        setIsLoading(true);
        try {
            const response = await axios.post('/register', data);
            const message: string = response.data.message;
            navigate('/login', { state: { message } });
        } catch (error) {
            setIsLoading(false);
            const err = error as AxiosError<ApiErrorResponse>;
            if (err.response?.status === 422) {
                setBackendErrors(err.response?.data.errors);
            }
        }
    };

    return (
        <AuthLayout>
            <form
                onSubmit={handleSubmit(onSubmit)}
                action="#"
                method="POST"
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
                            Create a new account
                        </h1>
                        <p className="text-md text-muted">
                            To use snapgram, please enter your details.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <InputField
                                label="Name"
                                id="name"
                                type="text"
                                {...register('name', {
                                    required: 'Name field is required.',
                                    maxLength: {
                                        value: 255,
                                        message:
                                            'Name must be less than 255 characters.',
                                    },
                                })}
                            />
                            {errors.name && (
                                <FieldError message={errors.name?.message} />
                            )}
                        </div>
                        <div>
                            <InputField
                                label="Username"
                                id="username"
                                type="text"
                                {...register('username', {
                                    required: 'Username field is required.',
                                    maxLength: {
                                        value: 255,
                                        message:
                                            'Username must be less than 255 characters.',
                                    },
                                    minLength: {
                                        value: 3,
                                        message:
                                            'Username must be at least 3 characters.',
                                    },
                                })}
                            />
                            {errors.username && (
                                <FieldError
                                    message={errors.username?.message}
                                />
                            )}
                            {backendErrors.username && (
                                <FieldError
                                    message={backendErrors.username[0]}
                                />
                            )}
                        </div>
                        <div>
                            <InputField
                                label="Email"
                                id="email"
                                type="email"
                                {...register('email', {
                                    required: 'Email field is required.',
                                })}
                            />
                            {errors.email && (
                                <FieldError message={errors.email?.message} />
                            )}
                            {backendErrors.email && (
                                <FieldError message={backendErrors?.email[0]} />
                            )}
                        </div>
                        <div>
                            <InputField
                                label="Password"
                                id="password"
                                type="password"
                                {...register('password', {
                                    required: 'Password field is required.',
                                    minLength: {
                                        value: 8,
                                        message:
                                            'Password must be at least 8 characters.',
                                    },
                                })}
                            />
                            {errors.password && (
                                <FieldError
                                    message={errors.password?.message}
                                />
                            )}
                        </div>
                        <div>
                            <InputField
                                label="Confirm password"
                                id="password_confirmation"
                                type="password"
                                {...register('password_confirmation', {
                                    required:
                                        'Password confirmation field is required.',
                                    validate: (value: string) => {
                                        return (
                                            value === getValues('password') ||
                                            'Passwords do not match.'
                                        );
                                    },
                                })}
                            />
                            {errors.password_confirmation && (
                                <FieldError
                                    message={
                                        errors.password_confirmation?.message
                                    }
                                />
                            )}
                        </div>
                        <Button
                            label={isLoading ? 'Registering...' : 'Register'}
                            type="submit"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex flex-col space-y-2 mt-4 text-center">
                        <p>
                            Already have an account?{' '}
                            <Link to="/login" className="text-primary">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
            <ToastContainer transition={Slide} closeOnClick={true} />
        </AuthLayout>
    );
}
