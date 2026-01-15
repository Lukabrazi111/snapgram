<?php

namespace App\Services;

use App\Jobs\SendUserVerificationMailJob;
use App\Models\User;
use App\Traits\TemporaryEmail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;

class AuthService
{
    use TemporaryEmail;

    /**
     * @return User
     * @throws \Exception
     */
    public function createUser(array $data): User
    {
        $user = User::create($data);

        $tempUrl = URL::temporarySignedRoute('verify-email', now()->addMinutes(15), ['user' => $user->id]);
        $frontendUrl = $this->getFrontendUrl($tempUrl);

        SendUserVerificationMailJob::dispatch($user->email, $frontendUrl);

        return $user;
    }

    public function verifyEmail(int $userId)
    {
        $user = User::find($userId);

        if (is_null($user)) {
            throw new \Exception('Invalid verification link.', 410);
        }

        if ($user->hasVerifiedEmail()) {
            throw new \Exception('User already verified.', 409);
        }

        $user->markEmailAsVerified();

        return $user;
    }

    /**
     * Login user
     *
     * @param array $data
     * @throws \Exception
     * @return array
     */
    public function login(array $data)
    {
        $user = $this->getUserByField($data['email']);

        if (!$user || !Hash::check($data['password'], $user->password)) {
            throw new \Exception('Email or password is incorrect.', 401);
        }

        if (!$user->hasVerifiedEmail()) {
            throw new \Exception('Email not verified. Please verify your email first.', 403);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return [
            'user' => $user,
            'token' => $token,
        ];
    }

    /**
     * Get user by field (email or username)
     *
     * @param string $value
     * @return User|false
     */
    public function getUserByField(string $value)
    {
        $field = filter_var($value, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        $user = User::where($field, $value)->first();

        if (!is_null($user)) {
            return $user;
        }

        return false;
    }
}
