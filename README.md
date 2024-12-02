# Markus Bike Shop

**Markus Bike Shop** is a web application designed to manage a bicycle business. The only feature available is the bike configurator. This repository includes both the frontend and backend of the application.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Available Scripts](#available-scripts)
4. [How to Run](#how-to-run)
5. [Testing](#testing)
6. [Areas for Improvement](#areas-for-improvement)

---

## Prerequisites

Before installing the project, make sure you have the following installed:

- Node.js >= 18
- npm >= 9 (bundled with Node.js)
- Git >= 2.0

---

## Installation

Clone this repository and follow the steps below to install both the frontend and backend.

### 1. Clone the Repository

```bash
git clone https://github.com/projectmarcobravo/markus-bike-shop.git
cd markus-bike-shop
```

### 2. Backend

```bash
cd server
npm install
```

### 3. Frontend

```bash
cd client
npm install
```

---

## Available Scripts

### Backend

| Script | Description                            |
| ------ | -------------------------------------- |
| `dev`  | Starts the server in development mode. |
| `test` | Runs Jest unit tests.                  |

### Frontend

| Script    | Description                              |
| --------- | ---------------------------------------- |
| `dev`     | Starts the development server with Vite. |
| `build`   | Builds the project for production.       |
| `lint`    | Runs ESLint to check code quality.       |
| `preview` | Serves the built application locally.    |

---

## How to Run

### Backend

```bash
npm run dev
```

The server will start at http://localhost:3000

### Frontend

```bash
npm run dev
```

The server will start at http://localhost:5173

## Testing

### Backend

To run the backend unit tests, use the following command:

```bash
cd server
npm run test
```

## Areas for Improvement

1. **Add more test suites**: Currently, unit tests cover only parts of the backend. These should be expanded to include more layers.
2. **Add integration tests**: Ensure endpoints and interactions between the frontend and backend function correctly.
3. **Implement frontend tests**: Test React components and validate user interactions.
4. **Improve error handling**: Now the error handler is a basic error throwing error. Customize errors.
5. **Improving UX/UI**: The design is quite basic. There are many things that can be improved, from how we show errors, to the colors, to accessibility...
