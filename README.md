# Fullstack Boilerplate

A modern fullstack boilerplate with Vue.js frontend and Express.js backend.

## Features

- **Frontend**

  - Vue 3 with Composition API
  - Pinia for state management
  - Vue Router for navigation
  - Tailwind CSS for styling
  - Vite for fast development

- **Backend**
  - Express.js server
  - MongoDB with Mongoose
  - JWT authentication
  - Environment variables support

## Project Structure

```
my-fullstack-boilerplate/
├── frontend/               # Vue.js frontend
│   ├── src/
│   │   ├── assets/       # Static assets
│   │   ├── components/    # Vue components
│   │   ├── pages/        # Page components
│   │   ├── stores/       # Pinia stores
│   │   ├── utils/        # Utility functions
│   │   ├── App.vue       # Root component
│   │   ├── main.js       # Entry point
│   │   └── style.css     # Global styles
|   |── .env             # Environment variables
│   └── package.json
│
├── backend/               # Express.js backend
│   ├── controllers/      # Route controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # Express routes
│   ├── middlewares/     # Custom middlewares
│   ├── server.js        # Entry point
|   ├── package.json
│   └── .env             # Environment variables
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/my-fullstack-boilerplate.git
cd my-fullstack-boilerplate
```

2. Install dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Configure environment variables
   Create `.env` files in both frontend and backend directories:

```env
# Backend
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

```env
# Frontend
VITE_API_URL=your_api_uri
```

### Running the Application

1. Start the backend server

```bash
cd backend
npm run dev
```

2. Start the frontend development server

```bash
cd frontend
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Authentication

The boilerplate includes a complete authentication system:

- User registration
- User login
- Protected routes
- JWT token management

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
