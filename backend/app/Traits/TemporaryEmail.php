<?php

namespace App\Traits;

trait TemporaryEmail
{
    /**
     * Generate a frontend URL from a temporary URL
     *
     * @param string $tempUrl
     * @throws \Exception
     * @return string
     */
    public function getFrontendUrl(string $tempUrl): string
    {
        $parsedUrl = parse_url($tempUrl);
        if ($parsedUrl === false) {
            throw new \Exception('Invalid URL', 400);
        }
        $path = $parsedUrl['path'] ?? '';
        $query = $parsedUrl['query'] ?? '';
        $frontendPath = str_replace('/api', '', $path);
        $frontendUrl = rtrim(config('app.frontend_url'), '/');

        if ($query && $query !== '') {
            return $frontendUrl . $frontendPath . '?' . $query;
        }

        return $frontendUrl . $frontendPath;
    }
}
