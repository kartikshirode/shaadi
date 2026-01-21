# Shaadi.com Clone - API Contracts

## Backend API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login (email/phone)
- `POST /api/auth/send-otp` - Send OTP to phone
- `POST /api/auth/verify-otp` - Verify OTP
- `GET /api/auth/me` - Get current user

### User Profiles
- `GET /api/profiles` - Get all profiles (with filters)
- `GET /api/profiles/{id}` - Get single profile
- `PUT /api/profiles/{id}` - Update profile
- `POST /api/profiles/{id}/interest` - Send interest
- `GET /api/profiles/matches` - Get matched profiles

### Success Stories
- `GET /api/success-stories` - Get all success stories
- `POST /api/success-stories` - Create success story

### Plans
- `GET /api/plans` - Get all subscription plans

## Mock Data to Replace
From `/app/frontend/src/data/mock.js`:
- `successStories` → `/api/success-stories`
- `profiles` → `/api/profiles`
- `plans` → `/api/plans`
- `communities`, `cities`, `motherTongues`, `features`, `stats` - Keep as static data

## Database Models

### User
```python
{
  id, email, phone, password_hash, profile_for, gender, 
  first_name, last_name, date_of_birth, religion, mother_tongue,
  city, is_verified, is_premium, created_at
}
```

### Profile
```python
{
  user_id, age, height, profession, education, about,
  photos, interests_sent, interests_received, matches
}
```

### SuccessStory
```python
{
  id, names, location, story, image, created_at
}
```

### Plan
```python
{
  id, name, duration, price, original_price, features, popular
}
```

## Frontend Integration
- Replace mock imports with API calls using axios
- Add AuthContext for user state management
- Add protected routes for logged-in users
