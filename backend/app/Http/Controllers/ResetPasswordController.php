<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Services\ResetPasswordService;
use Illuminate\Http\JsonResponse;

class ResetPasswordController extends Controller
{
    public function __construct(private readonly ResetPasswordService $resetPasswordService)
    {
    }

    public function forgotPassword(ForgotPasswordRequest $request): JsonResponse
    {
        $validated = $request->validated();

        try {
            $user = $this->resetPasswordService->sendResetPasswordEmail($validated['email']);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], $e->getCode());
        }

        return response()->json([
            'message' => 'We\'ve sent you a reset password email',
            'success' => true,
            'user' => $user->only('email')
        ]);
    }

    public function checkToken(string $token): JsonResponse
    {
        try {
            $this->resetPasswordService->checkTokenValidity($token);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], $e->getCode());
        }

        return response()->json([
            'message' => 'Token is valid',
            'success' => true,
        ]);
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        if (!$request->hasValidSignature()) {
            abort(401, 'Invalid reset password link or expired');
        }

        $validated = $request->validated();
        $token = $request->input('token');

        try {
            $user = $this->resetPasswordService->resetPassword($token, $validated);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], $e->getCode());
        }

        return response()->json([
            'message' => 'Password reset successfully',
            'success' => true,
            'user' => $user->only('email')
        ]);
    }
}
