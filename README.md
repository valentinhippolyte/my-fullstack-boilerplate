# Fullstack Boilerplate

A modern fullstack boilerplate using Docker with a Vue.js frontend and an Express.js backend.

## ✨ Features

### Frontend

- Vue 3 with Composition API
- Pinia for state management
- Vue Router for navigation
- Tailwind CSS for styling
- Vite for fast development

### Backend

- Express.js with Node.js
- MongoDB (via Docker) with Mongoose
- JWT-based authentication
- Environment variables support

## 🐳 Dockerized Setup

Everything runs in Docker containers for a consistent local development experience.

### Project Structure

```
my-fullstack-boilerplate/
├── frontend/          # Vue.js app
├── backend/           # Express.js API
└── .docker-compose.yml           # GMulti-container configuration
```

## 🚀 Getting Started

### Prerequisites

- Docker & Docker Compose installed

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/valentinhippolyte/my-fullstack-boilerplate.git
   cd my-fullstack-boilerplate
   ```

2. **Create environment files**

   ```env
   # backend/.env
   PORT=5000
   MONGO_URI=mongodb://mongo:27017/boilerplate_db
   JWT_SECRET=your_jwt_secret_here
   ```

   ```env
   # frontend/.env
   VITE_API_URL=http://localhost:5000
   ```

3. **Start all services**

   ```bash
   docker-compose up --build
   ```

   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - MongoDB: running in background on default port 27017

4. **Stop all containers**
   ```bash
   docker-compose down
   ```

## 🔐 Authentication

The boilerplate includes a complete JWT authentication flow:

- User registration
- Login
- Protected routes (the verifytoken middleware is already created but not the future routes)

### API Endpoints

| Method | Endpoint           | Description                       |
| ------ | ------------------ | --------------------------------- |
| POST   | /api/auth/register | Register a new user               |
| POST   | /api/auth/login    | Log in a user                     |
| GET    | /api/protected     | Example route with JWT middleware |


## 📄 License

This project is open source and available under the MIT License.

You are free to use, modify, and distribute it for personal or commercial projects, as long as you include proper attribution.

© 2025 Valentin HIPPOLYTE
