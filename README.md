
# EasyWallet (I have made a better version of this in another repository)

EasyWallet is a full-stack practice project inspired by digital wallet applications like Paytm. It allows users to send and receive money seamlessly. This project leverages a modern technology stack including Node.js, Express, MongoDB, JavaScript, and Tailwind CSS.

## Features

- User authentication and session management
- Financial transactions including sending and receiving money
- User account management
- API for handling user balances and transactions

## Technology Stack

- **Frontend**: JavaScript, React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

Ensure you have Node.js, npm (or yarn), and MongoDB installed on your machine.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourgithubusername/easywallet.git
cd easywallet
npm install


# EasyWallet Project Structure

## Routing

### Backend Routes

#### User Routes:
- **Sign Up**: Registers a new user.
- **Sign In**: Authenticates a user and returns a JWT.

#### Account Routes:
- **Get Balance**: Retrieves the current balance of a user.
- **Transfer Money**: Allows one user to transfer money to another.

## Database Schema

- **Users**: Stores user information.
- **Accounts**: Stores user balances.

## Middlewares

- **CORS**: Allows handling requests from different origins.
- **Body Parser**: Parses incoming request bodies in a middleware before handlers.

## Authentication

Utilizes `jsonwebtoken` for managing tokens and securing routes.

## API Documentation

### User API

- `POST /api/v1/user/signup`: Registers a new user.
- `POST /api/v1/user/signin`: Authenticates a user.

### Account API

- `GET /api/v1/account/balance`: Retrieves user balance.
- `POST /api/v1/account/transfer`: Transfers balance between users.

## Security

Uses environment variables to secure sensitive information such as database URI and JWT secrets.

## Contributions

Contributions are welcome. Please fork the repository and submit pull requests to the main branch.
