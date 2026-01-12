import AuthLayout from '@/layouts/AuthLayout';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

export default function Login() {
    const location = useLocation();

    useEffect(() => {
        const message = location.state?.message;
        if (message) {
            toast.success(message);
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    return (
        <AuthLayout>
            <form
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
                            Log in to your account
                        </h1>
                        <p className="text-md text-muted">
                            Welcome back! Please enter your details.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <InputField
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                        />
                        <InputField
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                        />
                        <Button label="Login" type="submit" />
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
