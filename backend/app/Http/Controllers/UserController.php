<?php

namespace App\Http\Controllers;

use App\Actions\User\UpdateUserAction;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(Request $request): JsonResponse
    {
        return response()->json(new UserResource($request->user()));
    }

    public function update(UpdateUserRequest $request, UpdateUserAction $action): JsonResponse
    {
        $user = $action->handle(
            $request->user(),
            $request->validated(),
            $request->file('image'),
        );

        return response()->json([
            'success' => true,
            'user' => new UserResource($user),
        ]);
    }
}
