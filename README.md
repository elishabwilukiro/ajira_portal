# Job Portal Application

# Features
- Post jobs (create, delete, view, update)
- Apply Job Process 
- Create Tables & Models
- Process Job Posting
- Managed Jobs
- Update Profile
- Check Applied Status
- User (Login & Signup)
- Recruiter (Login & Signup)
- Get & Delete Applied Job
- Fetch Applied Jobs
- Apply Job Process 
- Filter Jobs
- View Applications
- Additional Logout

# Other Features
- Login With Google Account
- Use Of Google API

# Frontend
- React
- Vite
- Tailwind-css
- json-server --watch db.json --port 3001

# Backend
- Laravel-Php
- Laravel JWT-Auth
     - composer require php-open-source-saver/jwt-auth
     - php artisan vendor:publish --provider="PHPOpenSourceSaver\JWTAuth\Providers\LaravelServiceProvider"
     - php artisan jwt:secret
- Laravel-APIs
     - php artisan make:middleware AttachJwtFromCookie

# Database
- Fetch Data Using Json Sever 
     > npm install json-server
     > npm install axios

- MySQL Database
- PostgreSQL for robust data management.
- Fetch Data Using Json Sever


# Google OAuth
- GOOGLE_CLIENT_ID=your_client_id
- GOOGLE_CLIENT_SECRET=your_client_secret
