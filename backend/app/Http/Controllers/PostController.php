<?php

namespace App\Http\Controllers;

use App\Actions\Post\CreatePostAction;
use App\Actions\Post\DeletePostAction;
use App\Actions\Post\UpdatePostAction;
use App\Http\Requests\CreatePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;

class PostController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $posts = Post::query()
            ->with(['user', 'tags', 'image'])
            ->latest()
            ->paginate(10);

        return response()->json([
            'success' => true,
            'posts' => PostResource::collection($posts),
            'meta' => [
                'current_page' => $posts->currentPage(),
                'last_page' => $posts->lastPage(),
                'per_page' => $posts->perPage(),
                'total' => $posts->total(),
            ],
        ]);
    }

    public function show(Post $post): \Illuminate\Http\JsonResponse
    {
        $post->load('user');

        return response()->json([
            'success' => true,
            'post' => new PostResource($post),
        ]);
    }

    public function store(CreatePostRequest $request, CreatePostAction $action): \Illuminate\Http\JsonResponse
    {
        $post = $action->handle($request->user(), $request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Post created successfully.',
            'post' => new PostResource($post),
        ]);
    }

    public function update(Post $post, UpdatePostRequest $request, UpdatePostAction $action): \Illuminate\Http\JsonResponse
    {
        $post = $action->handle($post, $request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Post updated successfully.',
            'post' => new PostResource($post),
        ]);
    }

    public function destroy(Post $post, DeletePostAction $action): \Illuminate\Http\JsonResponse
    {
        $action->handle($post);

        return response()->json([
            'success' => true,
            'message' => 'Post deleted successfully.',
        ]);
    }
}
