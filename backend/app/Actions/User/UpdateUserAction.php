<?php

namespace App\Actions\User;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

final class UpdateUserAction
{
    /**
     * Execute the update user action.
     */
    public function handle(User $user, array $attributes, $image): User
    {
        DB::transaction(function () use ($user, $attributes, $image) {
            $user->update([
                'name' => $attributes['name'] ?? $user->name,
                'bio' => $attributes['bio'] ?? $user->bio,
            ]);

            if ($image) {
                // Delete old file from storage
                $this->deleteStoredImage($user->image);
                $path = $image->store('avatars', 'public');
                $url = asset('storage/' . $path);

                $user->image()->updateOrCreate([
                    'mediable_id' => $user->id,
                    'mediable_type' => User::class,
                ], ['url' => $url]);
            }

            $user->load('image');
        });

        return $user;
    }

    private function deleteStoredImage($image): void
    {
        if ($image) {
            $oldPath = str_replace(asset('storage/'), '', $image->url);
            Storage::disk('public')->delete($oldPath);
        }
    }
}
