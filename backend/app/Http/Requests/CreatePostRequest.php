<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'location' => 'required|string|min:3|max:50',
            'description' => 'required|string|min:3|max:255',
            'image' => 'required|image|mimes:png,jpg|max:4096',
            'tags' => 'required|array',
            'tags.*' => 'required|string|min:3|max:30',
        ];
    }
}
