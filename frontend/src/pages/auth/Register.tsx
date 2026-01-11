import AuthLayout from '@/layouts/AuthLayout';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';
import FieldError from '@/components/form/FieldError';
import { Link } from 'react-router-dom';
import { type SubmitHandler, useForm } from 'react-hook-form';
import axios from '@/configs/axios';

type RegisterFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      const response = await axios.post('/register', data);
      console.log(response);
      // Need to handle the response and redirect to the login page
    } catch (error) {
      console.log(error);
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
            <h1 className="text-3xl font-bold">Create a new account</h1>
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
                  required: 'Name field is required',
                  maxLength: {
                    value: 255,
                    message: 'Name must be less than 255 characters',
                  },
                })}
              />
              {errors.name && <FieldError error={errors.name} />}
            </div>
            <div>
              <InputField
                label="Username"
                id="username"
                type="text"
                {...register('username', {
                  required: 'Username field is required',
                  maxLength: {
                    value: 255,
                    message: 'Username must be less than 255 characters',
                  },
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                })}
              />
              {errors.username && <FieldError error={errors.username} />}
            </div>
            <div>
              <InputField
                label="Email"
                id="email"
                type="email"
                {...register('email', { required: 'Email field is required' })}
              />
              {errors.email && <FieldError error={errors.email} />}
            </div>
            <div>
              <InputField
                label="Password"
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password field is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                })}
              />
              {errors.password && <FieldError error={errors.password} />}
            </div>
            <div>
              <InputField
                label="Confirm password"
                id="password_confirmation"
                type="password"
                {...register('password_confirmation', {
                  required: 'Password confirmation field is required',
                  validate: (value: string) => {
                    return (
                      value === getValues('password') ||
                      'Passwords do not match'
                    );
                  },
                })}
              />
              {errors.password_confirmation && (
                <FieldError error={errors.password_confirmation} />
              )}
            </div>
            <Button label="Register" type="submit" />
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
    </AuthLayout>
  );
}
