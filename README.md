# Full-Stack Content Dashboard

A full-stack web application built to demonstrate a modern web development workflow. This project features a React front-end that fetches data from a custom Node.js/Express back-end API, which in turn retrieves data from a PostgreSQL database. The database is populated by a separate Node.js script that fetches live data from the public JSONPlaceholder API.![Webapp_screenshot](https://github.com/user-attachments/assets/6e4c6c3f-279a-4043-bf63-c55000ca1441)


## Features

-   **Full-Stack Architecture:** Utilizes the PERN (PostgreSQL, Express, React, Node.js) stack.
-   **REST API:** Custom back-end API built with Node.js and Express to serve data to the front-end.
-   **Data Ingestion:** A separate Node.js script uses Axios to fetch data from a third-party public API.
-   **Database Integration:** Uses PostgreSQL for persistent data storage, managed with the `pg` library.
-   **Dynamic Front-End:** The UI is built with React and uses hooks (`useState`, `useEffect`) to manage state and handle asynchronous data fetching.

## Technologies Used

-   **Front-End:** React, CSS3
-   **Back-End:** Node.js, Express.js
* **Database:** PostgreSQL
* **Libraries:** Axios, pg, dotenv, cors

## How To Run

1.  **Clone the repository:** `git clone https://github.com/Aneeq177/fullstack-content-dashboard.git
2.  **Set up the back-end:**
    -   `cd server`
    -   `npm install`
    -   Create a `.env` file and add your `DB_PASSWORD`.
    -   Set up your PostgreSQL database and run the SQL script in `pgAdmin`.
    -   Run the data sync script: `node fetch-data.js`
    -   Start the server: `node index.js`
3.  **Set up the front-end:**
    -   In a new terminal, `cd client`
    -   `npm install`
    -   `npm start`
4.  The application will be running at `http://localhost:3000`.
