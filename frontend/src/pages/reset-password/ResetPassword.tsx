import AuthLayout from '@/layouts/AuthLayout';
import InputField from '@/components/ui/InputField';
import { Link } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FieldError from '@/components/form/FieldError.tsx';
import type { AxiosError } from 'axios';
import axios from '@/configs/axios.tsx';
import Button from '@/components/ui/Button';

interface ResetPasswordFormInputs {
    password: string;
    password_confirmation: string;
}

type ApiErrorResponse = {
    message: string;
};

export default function ResetPassword() {
    const [backendErrorMessage, setBackendErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<ResetPasswordFormInputs>();

    const passwordConfirmationWatcher: string = watch('password_confirmation');

    useEffect(() => {
        if (passwordConfirmationWatcher) {
            setBackendErrorMessage('');
        }
    }, [passwordConfirmationWatcher]);

    const handleResetPassword: SubmitHandler<ResetPasswordFormInputs> = async (
        data: ResetPasswordFormInputs,
    ) => {
        setIsLoading(true);
        try {
            const response = await axios.post('/reset-password', data);
            if (response.status === 200) {
                navigate('/login', {
                    state: { message: response.data.message },
                });
                reset();
            }
        } catch (error) {
            const err = error as AxiosError<ApiErrorResponse>;
            setBackendErrorMessage(
                err.message ??
                    'An error occurred while sending the reset link.',
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout>
            <form
                onSubmit={handleSubmit(handleResetPassword)}
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
                    <div className="flex items-center justify-center space-y-2">
                        <h1 className="text-3xl font-bold">
                            Reset your password
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <InputField
                                {...register('password', {
                                    required: 'Password field is required.',
                                    minLength: {
                                        value: 8,
                                        message:
                                            'Password must be at least 8 characters long.',
                                    },
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
                        </div>
                        <div>
                            <InputField
                                {...register('password_confirmation', {
                                    required:
                                        'Password confirmation field is required.',
                                    validate: (value) => {
                                        if (
                                            value !==
                                            passwordConfirmationWatcher
                                        ) {
                                            return 'Passwords do not match.';
                                        }
                                        return true;
                                    },
                                })}
                                label="Password confirmation"
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                            />
                            {errors.password_confirmation && (
                                <FieldError
                                    message={
                                        errors.password_confirmation?.message
                                    }
                                />
                            )}
                            {backendErrorMessage && (
                                <FieldError message={backendErrorMessage} />
                            )}
                        </div>
                        <Button
                            label={
                                isLoading && !backendErrorMessage
                                    ? 'Sending reset link...'
                                    : 'Send reset link'
                            }
                            type="submit"
                            disabled={isLoading && !backendErrorMessage}
                        />
                    </div>

                    <div className="space-y-2 mt-4 text-center">
                        <Link to="/login" className="text-primary">
                            Back to login
                        </Link>
                    </div>
                </div>
            </form>
            <ToastContainer transition={Slide} closeOnClick={true} />
        </AuthLayout>
    );
}
