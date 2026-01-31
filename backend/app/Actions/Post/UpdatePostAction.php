<?php

namespace App\Actions\Post;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

final class UpdatePostAction
{
    /**
     * Execute update post action.
     */
    public function handle(Post $post, array $attributes): Post
    {
        DB::transaction(function () use ($post, $attributes) {
            $post->update([
                'location' => $attributes['location'],
                'description' => $attributes['description'],
            ]);

            if (!empty($attributes['tags'])) {
                $tagIds = $this->getTagIds($attributes['tags']);
                $post->tags()->sync($tagIds);
            }

            $image = $attributes['image'] ?? null;

            if (!is_null($image)) {
                $this->postImageExists($post->image);

                $path = $image->store('posts', 'public');
                $url = asset('storage/' . $path);

                $post->image()->updateOrCreate(
                    ['mediable_id' => $post->id, 'mediable_type' => Post::class],
                    ['url' => $url]
                );
            }
        });

        return $post;
    }

    private function getTagIds($tags): \Illuminate\Support\Collection
    {
        return collect($tags)->map(function (string $tagName) {
            return Tag::firstOrCreate(['name' => $tagName])->id;
        });
    }

    private function postImageExists($postImage): void
    {
        if ($postImage) {
            $oldPath = str_replace(asset('storage/'), '', $postImage->url);
            Storage::disk('public')->delete($oldPath);
        }
    }
}
