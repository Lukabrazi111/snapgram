import AuthLayout from '@/layouts/AuthLayout';
import InputField from '@/components/ui/InputField';
import { Link } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import FieldError from '@/components/ui/FieldError';
import type { AxiosError } from 'axios';
import axios from '@/configs/axios.tsx';
import Button from '@/components/ui/Button';

interface ForgotPasswordFormInputs {
    email: string;
}

type ApiErrorResponse = {
    message: string;
};

export default function ForgotPassword() {
    const [backendErrorMessage, setBackendErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm<ForgotPasswordFormInputs>();

    const handleValueOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (!value) {
            setBackendErrorMessage('');
        }
    };

    const handleForgotPassword: SubmitHandler<
        ForgotPasswordFormInputs
    > = async (data: ForgotPasswordFormInputs) => {
        setIsLoading(true);
        try {
            const response = await axios.post('/forgot-password', data);
            if (response.status === 200) {
                toast.success(response.data.message);
                resetField('email');
                setBackendErrorMessage('');
            }
        } catch (error) {
            const err = error as AxiosError<ApiErrorResponse>;
            if (err.response?.status === 403) {
                const errorMessage: string =
                    err.response?.data.message ??
                    'An error occurred while sending the reset link.';
                setBackendErrorMessage(errorMessage);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout>
            <form
                onSubmit={handleSubmit(handleForgotPassword)}
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
                            Forgot your password?
                        </h1>
                        <p className="text-md text-muted">
                            Please enter your email to request a password reset
                            link.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <InputField
                                {...register('email', {
                                    required: 'Email field is required.',
                                    onChange: handleValueOnChange,
                                })}
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                            />
                            {errors.email && (
                                <FieldError message={errors.email?.message} />
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
