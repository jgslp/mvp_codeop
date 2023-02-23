# Practicum

This web app allows speech-language pathologists to keep track of their caseload, including student data and due dates for paperwork. It also allows SLPs to take and record data and session notes.

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

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._

## Database Schema
![Screenshot 2023-02-23 at 6 34 34 PM](https://user-images.githubusercontent.com/99021032/220986011-5524c342-9bb4-4fa5-b9cf-e4ff4d6e802f.png)
