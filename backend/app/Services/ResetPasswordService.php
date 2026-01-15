<?php

namespace App\Services;

use App\Jobs\SendResetPasswordEmailJob;
use App\Models\User;
use App\Traits\TemporaryEmail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class ResetPasswordService
{
    use TemporaryEmail;

    public function sendResetPasswordEmail(string $email): User
    {
        $user = User::whereEmail($email)->first();

        if (!$user) {
            throw new \Exception('We\'ve sent you a reset password email. (fake response for testing)', 200);
        }

        if (!$user->hasVerifiedEmail()) {
            throw new \Exception('Email not verified. Please verify your email first.', 403);
        }

        $token = $this->saveToken($email);
        $tempUrl = $this->generateTempUrl($token);

        SendResetPasswordEmailJob::dispatch($user->email, $tempUrl);

        return $user;
    }

    public function resetPassword(string $token, array $validated): User
    {
        $email = $this->getEmailViaToken($token);

        if (!$email) {
            throw new \Exception('Invalid token or expired', 400);
        }

        $user = User::whereEmail($email)->first();

        if (!$user->hasVerifiedEmail()) {
            throw new \Exception('Email not verified. Please verify your email first.', 403);
        }

        $user->update([
            'password' => Hash::make($validated['password']),
        ]);

        $this->deleteToken($email);

        return $user;
    }

    public function deleteToken(string $email): void
    {
        DB::table('password_reset_tokens')->whereEmail($email)->delete();
    }

    public function getEmailViaToken(string $token): bool|string
    {
        $data = DB::table('password_reset_tokens')->whereToken($token)->first();

        if (!$data) {
            return false;
        }

        return $data->email; // return email of the user
    }

    public function saveToken(string $email): string
    {
        $this->tokenExistsAndDelete($email);

        $token = Str::random(60);

        DB::table('password_reset_tokens')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => now(),
        ]);

        return $token;
    }

    /**
     * Check if token exists and delete it if it does.
     * This is to prevent the same token being used multiple times.
     *
     * @param string $email
     * @return void
     */
    public function tokenExistsAndDelete(string $email): void
    {
        $existsToken = DB::table('password_reset_tokens')->whereEmail($email)->exists();

        if ($existsToken) {
            $this->deleteToken($email);
        }
    }

    public function generateTempUrl(string $token): string
    {
        $tempUrl = URL::temporarySignedRoute('reset-password', now()->addMinutes(15), ['token' => $token]);
        return $this->getFrontendUrl($tempUrl);
    }
}
