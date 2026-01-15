import AuthLayout from '@/layouts/AuthLayout';
import InputField from '@/components/ui/InputField';
import { Slide, ToastContainer } from 'react-toastify';
import { useState, useEffect, useCallback } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
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

type ValidationErrors = Record<string, string[]>;

export default function ResetPassword() {
    const [backendErrors, setBackendErrors] = useState<ValidationErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
        reset,
    } = useForm<ResetPasswordFormInputs>();

    const passwordWatcher: string = watch('password');

    const getParams = useCallback(() => {
        const token = searchParams.get('token');
        const expires = searchParams.get('expires');
        const signature = searchParams.get('signature');

        return { token, expires, signature };
    }, [searchParams]);

    useEffect(() => {
        const { token, expires, signature } = getParams();

        if (!token || !expires || !signature) {
            navigate('/login', {
                replace: true,
                state: { errorMessage: 'Invalid reset password link' },
            });
            return;
        }

        // TODO: Need to check if email is in the database (use backend api). if not redirect to login with same error message.

        return () => {
            searchParams.delete('token');
            searchParams.delete('expires');
            searchParams.delete('signature');
        };
    }, [navigate, getParams, searchParams]);

    useEffect(() => {
        if (!passwordWatcher) {
            setBackendErrors({});
        }
    }, [passwordWatcher]);

    const handleResetPassword: SubmitHandler<ResetPasswordFormInputs> = async (
        data: ResetPasswordFormInputs,
    ) => {
        setIsLoading(true);
        const { token, expires, signature } = getParams();

        try {
            const response = await axios.post('/reset-password', data, {
                params: { expires, token, signature },
            });

            if (response.status === 200) {
                navigate('/login', {
                    replace: true,
                    state: { message: response.data.message },
                });
                reset();
            }
        } catch (error) {
            const err = error as AxiosError<ApiErrorResponse>;
            if (
                err.response?.status === 401 ||
                err.response?.status === 400 ||
                err.response?.status === 403
            ) {
                navigate('/login', {
                    replace: true,
                    state: { errorMessage: err.response?.data.message },
                });
            }
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
                                    validate: (value: string) => {
                                        return (
                                            value === getValues('password') ||
                                            'Passwords do not match.'
                                        );
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
                            {backendErrors?.password_confirmation && (
                                <FieldError
                                    message={
                                        backendErrors?.password_confirmation[0]
                                    }
                                />
                            )}
                        </div>
                        <Button
                            label={
                                isLoading &&
                                Object.keys(backendErrors).length > 0
                                    ? 'Resetting password...'
                                    : 'Reset password'
                            }
                            type="submit"
                            disabled={
                                isLoading &&
                                Object.keys(backendErrors).length > 0
                            }
                        />
                    </div>
                </div>
            </form>
            <ToastContainer transition={Slide} closeOnClick={true} />
        </AuthLayout>
    );
}
