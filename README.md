# Snapgram

A full-stack social media application for sharing photos and connecting with others.

## Features

- User authentication with email verification
- Create, edit, and delete posts with images
- Explore and discover posts
- Like and save posts
- User profiles
- Password reset flow

## Tech Stack

**Backend**
- Laravel 12 (PHP 8.2+)
- PostgreSQL
- Laravel Sanctum (API authentication)

**Frontend**
- React 19 + TypeScript
- Vite
- Tailwind CSS
- Zustand (state management)

## Getting Started

### Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+
- PostgreSQL
- Docker (optional, for Laravel Sail)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/snapgram.git
cd snapgram
```

2. Backend setup
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

3. Frontend setup
```bash
cd frontend
npm install
```

### Running the App

**Backend**
```bash
cd backend
composer dev
```

**Frontend**
```bash
cd frontend
npm run dev
```

## Project Structure

```
snapgram/
├── backend/          # Laravel API
│   ├── app/
│   │   ├── Http/     # Controllers, Requests, Resources
│   │   ├── Models/   # Eloquent models
│   │   ├── Services/ # Business logic
│   │   └── Actions/  # Action classes
│   └── routes/       # API routes
│
└── frontend/         # React SPA
    └── src/
        ├── pages/      # Page components
        ├── components/ # Reusable components
        ├── layouts/    # Layout components
        └── stores/     # Zustand stores
```

## License

MIT
