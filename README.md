# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Task Management System

## Getting Started

Follow these instructions to set up and run the project.

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Running the Project

To start the development server, run:
```sh
npm run dev
```

Run this command to start json-server:
```sh
npm run server
```

### Running Tests

To run the tests, use the following command:
```sh
npm test
```

### Building the Project

To build the project for production, run:
```sh
npm run build
```

### Additional Scripts

- `npm run lint`: Lint the codebase using ESLint.
- `npm run format`: Format the codebase using Prettier.

## User Roles

There are two types of role users in the system:

1. **Admin**
   - Can see all high-priority tasks.
    admin  => "email": test@gmail.com 
     "password": test

2. **User**
   - Can see only their assigned tasks on the home page.
     user => "email": "user@gmail.com",
      "password": "usertest",




