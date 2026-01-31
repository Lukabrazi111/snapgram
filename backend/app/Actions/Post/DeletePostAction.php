<?php

namespace App\Actions\Post;

use App\Models\Post;
use Illuminate\Support\Facades\Storage;

final class DeletePostAction
{
    /**
     * Execute delete post action.
     */
    public function handle(Post $post): void
    {
        if ($post->image) {
            $path = str_replace(asset('storage/'), '', $post->image->url);
            Storage::disk('public')->delete($path);
        }

        $post->delete();
    }
}
