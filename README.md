# news

# News Application Setup

Follow the steps below to set up the frontend and backend applications. Both frontend and backend are managed in a single repository.

## Backend Setup

1. Navigate to the backend folder and install dependencies:
   npm install
2.Once the installation is complete, start the backend service:
  node index.js

# APIs
Note: The backend integrates a third-party API for news content.

GET /api/news :=> Retrieves a list of all news content.
GET /api/:id :=> Retrieves details of an individual article based on the author.
GET /api/news/:text :=> Performs a search based on user input.


## Frontend Setup

1. Navigate to the frontend folder and install dependencies:
    npm install

2. After the installation completes, start the frontend application:
   npm start
3. Once the application starts, it will run on port 3000, and news content will be loaded automatically.
4. You can view news articles, perform searches, and read articles in detail.

