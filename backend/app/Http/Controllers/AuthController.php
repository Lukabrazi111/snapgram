<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(private AuthService $authService)
    {
    }

    /**
     * Register a new user and send verification email
     *
     * @param RegisterRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request)
    {
        $validated = $request->validated();

        try {
            $user = $this->authService->createUser($validated);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], $e->getCode());
        }

        return response()->json([
            'message' => 'We\'ve sent you a verification email, please verify your email',
            'success' => true,
            'user' => new UserResource($user),
        ]);
    }

    public function login(LoginRequest $request)
    {
        $validated = $request->validated();

        try {
            ['user' => $user, 'token' => $token] = $this->authService->login($validated);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], $e->getCode());
        }

        return response()->json([
            'token' => $token,
            'user' => new UserResource($user),
        ]);
    }


    public function verifyEmail(Request $request)
    {
        if (!$request->hasValidSignature()) {
            return response()->json([
                'message' => 'Invalid verification link',
                'success' => false,
            ], 410);
        }

        try {
            $user = $this->authService->verifyEmail((int) $request->user);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], $e->getCode());
        }

        return response()->json([
            'message' => 'User verified successfully',
            'success' => true,
            'user' => new UserResource($user),
        ]);
    }
}
