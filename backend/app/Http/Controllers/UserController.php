<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(Request $request): JsonResponse
    {
        return response()->json(new UserResource($request->user()));
    }

    public function update(UpdateUserRequest $request): JsonResponse
    {
        $user = $request->user();
        $validated = $request->validated();

        $user->update([
            'name' => $validated['name'] ?? $user->name,
            'bio' => $validated['bio'] ?? $user->bio,
        ]);

        if ($request->hasFile('image')) {
            // Delete old file from storage (not the DB record)
            $this->deleteStoredImage($user->image);

            $path = $request->file('image')->store('avatars', 'public');
            $url = asset('storage/' . $path);

            // Update existing record or create new one
            $user->image()->updateOrCreate([
                'mediable_id' => $user->id,
                'mediable_type' => User::class,
            ], ['url' => $url]);
        }

        $user->load('image');

        return response()->json([
            'success' => true,
            'user' => new UserResource($user),
        ]);
    }

    private function deleteStoredImage($image): void
    {
        if ($image) {
            $oldPath = str_replace(asset('storage/'), '', $image->url);
            Storage::disk('public')->delete($oldPath);
        }
    }
}
