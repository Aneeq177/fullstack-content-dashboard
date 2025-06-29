# Full-Stack Content Dashboard

This full-stack application was built from the ground up to demonstrate the complete development lifecycle, from initial setup to a polished, portfolio-ready project. The project was initially designed to use live sports APIs. During development, I encountered real-world constraints with these third-party services, including service outages and paywalled data access.

In response, I made a strategic decision to pivot the data source to ensure the project's successful completion and stability. I researched and evaluated several public APIs, selecting JSONPlaceholder for its proven reliability. The back-end data ingestion script was then re-engineered to fetch, process, and store this new data, demonstrating a practical ability to adapt to changing project requirements and deliver a fully functional application.
JSONPlaceholder API.![Webapp_screenshot](https://github.com/user-attachments/assets/6e4c6c3f-279a-4043-bf63-c55000ca1441)


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
