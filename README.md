# Blog Post Project

This is a simple blog post project implemented with Node.js, Express, Sequelize, and MySQL.

## Features

- User Registration and Authentication
- Create, Read, Update, and Delete (CRUD) Operations for Blog Posts
- Association between Users and Posts
- Environment Variable Configuration

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL installed

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/RahulKrishna15/blog_post.git
    cd blog_post
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Update Your details in the config/config.json file
    ```
    "development": {
    "username": "root",
    "password": "your_password",
    "database": "your_database_name",
    "host": "127.0.0.1",
    "dialect": "your_dialect"
    }
    ```

4. Run the migrations:
    ```bash
    npx sequelize-cli db:migrate
    ```

5. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### Authentication

- `POST /api/register`: Register a new user
  - Request Body: `{ "username": "example_user", "password": "secure_password" }`

- `POST /api/login`: Login a user and get a JWT token
  - Request Body: `{ "username": "example_user", "password": "secure_password" }`

### Posts

- `POST /api/posts`: Create a new post (requires authentication)
  - Request Body: `{ "title": "Post Title", "content": "Post Content" }`

- `GET /api/posts`: Get all posts (requires authentication)

- `GET /api/posts/:id`: Get a post by ID (requires authentication)

- `PUT /api/posts/:id`: Update a post by ID (requires authentication)
  - Request Body: `{ "title": "Updated Title", "content": "Updated Content" }`

- `DELETE /api/posts/:id`: Delete a post by ID (requires authentication)

### Video Explaination
- Video Explaination of the project is in the folder named "Video"