# Project README

## Overview

## Live URLs

- **Frontend**: https://helpcenter-frontend.vercel.app/
- **Backend**: https://helpcenterbackend.onrender.com/

This project consists of two main components:

1. **Frontend**: A Next.js application for the user interface.
2. **Backend**: An Express.js application for handling API requests.

### Frontend (Next.js)

The frontend is built using Next.js, a React framework that provides server-side rendering and static site generation.

### Backend (Express.js)

The backend is built using Express.js, a minimal and flexible Node.js web application framework.

## Getting Started

Follow these steps to run both the frontend and backend locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)

### Setting Up the Backend (Express.js)

1. **Navigate to the Backend Directory**

   Open your terminal and navigate to the `backend` folder:

   ```bash
   cd path/to/your/project/backend
   ```

2. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start the Backend Server**

   To start the Express server, use the following command:

   ```bash
   npm start
   ```

   The server will start on port `3001` by default. You can change this in the Express configuration if needed.

### Setting Up the Frontend (Next.js)

1. **Navigate to the Frontend Directory**

   Open another terminal window and navigate to the `frontend` folder:

   ```bash
   cd path/to/your/project/frontend
   ```

2. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start the Frontend Server**

   To start the Next.js application, use the following command:

   ```bash
   npm run dev
   ```

   The application will start on port `3000` by default. You can change this in the Next.js configuration if needed.

### How It Works

#### Fetching and Displaying Cards

- **Frontend**: The `SearchComponent` fetches help topics (or cards) from the backend using the `GetAllCards` function. This data is displayed in a grid format.
- **Backend**: The Express server has endpoints to handle requests for fetching all cards and creating new cards.

#### Creating a New Card

- **Submit a Request**: The `Header` component includes a "Submit a request" button that opens a modal.
- **Modal Component**: The `Modal` component allows users to enter a title and description for the new card. When submitted, it sends a POST request to the backend to create a new card.
- **Refetching Data**: After a successful submission, the `fetchCards` function in the `Header` component is called to refetch the updated list of cards from the backend.

### Directory Structure

```
/project-root
  /frontend
    - Contains the Next.js application code
  /backend
    - Contains the Express.js application code
```

### Endpoints

- **Frontend**:

  - Fetch cards: `GET /api/v1/cards`
  - Create a card: `POST /api/v1/cards`

- **Backend**:
  - `GET /api/v1/cards`: Fetch all cards.
  - `GET /api/v1/cards/:id`: Fetch single card.
  - `POST /api/v1/cards`: Create a new card with a title and description.

### Development

- **Frontend**: The Next.js app provides a user interface for searching and displaying cards.
- **Backend**: The Express app provides API endpoints for managing cards.
