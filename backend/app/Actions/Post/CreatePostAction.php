<?php

namespace App\Actions\Post;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Support\Facades\DB;

final class CreatePostAction
{
    /**
     * Execute post create action.
     */
    public function handle(User $user, array $attributes)
    {
        return DB::transaction(function () use ($user, $attributes) {
            $post = $user->posts()->create([
                'description' => $attributes['description'],
                'location' => $attributes['location'],
            ]);

            if (!empty($attributes['tags'])) {
                $tagIds = $this->getTagIds($attributes['tags']);
                $post->tags()->sync($tagIds);
            }

            $image = $attributes['image'];

            if ($image) {
                $path = $image->store('posts', 'public');
                $url = asset('storage/' . $path);

                $post->image()->create([
                    'url' => $url,
                ]);
            }

            $post->load(['tags', 'image']);

            return $post;
        });
    }

    private function getTagIds(array $tags): \Illuminate\Support\Collection
    {
        return collect($tags)->map(function (string $tagName) {
            return Tag::firstOrCreate(['name' => strtolower($tagName)])->id;
        });
    }
}
