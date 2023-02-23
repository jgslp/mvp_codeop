# Practicum

This web app allows speech-language pathologists to keep track of their caseload, including student data and due dates for paperwork. It also allows SLPs to take and record data and session notes.

## Features

## Set-up Instructions

### Backend

- Open a new terminal window
- Run `npm install` in the project's root folder to install Node dependencies.
- Run `npm start` in the root folder to start the Express server on port 5001.

### Frontend

- Open a new terminal window
- Enter `cd client` to navigate to the client folder
- Run `npm install` to install React dependencies
- Run `npm start` to start the client server on port 3000.

### Database

- Open a new terminal window
- Run `mysql -u root -p` to access MySQL
- Create a .env file in the project's root folder and enter the following:

```
DB_USERDB_HOST=localhost
DB_USER=root
DB_NAME=speech
DB_PASS=your_password
```

- In a new terminal, in the project directory, run `npm run migrate` to create tables

## Backend

### MySQL Database Schema

![Screenshot 2023-02-23 at 6 43 09 PM](https://user-images.githubusercontent.com/99021032/220987276-cd59bea7-1858-49c4-b146-96f534a4ab39.png)

### API Routes 

## Frontend

### React Components

<img width="828" alt="Screenshot 2023-02-23 at 8 42 59 PM" src="https://user-images.githubusercontent.com/99021032/221013254-89f171a5-0d9b-4692-8b65-b3bb016078a5.png">

### User Flow

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
