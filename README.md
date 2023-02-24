# SLP Admin

This web app allows speech-language pathologists to keep track of their caseload, including student data and due dates for paperwork. It also allows SLPs to take and record data and session notes.

## Features

The app has two pages. On the Caseload page:
- There is a form where the speech therapist can add new students to their student list.
- The speech therapist can see a table listing all of the students on their caseload and their data, including their first and last names, date of birth, the number of minutes of speech therapy they receive per month, and the dates that their annual review and triennial reevaluations are due. 
- Each column of the table is sortable in ascending and descending order. The clinician can easily locate students and see which paperwork is due soon by clicking on the column header. 

On the Progress page, the speech pathologist can take and record session data:
- There is a list of students in the sidebar listed in alphabetical order by last name. 
- Upon clicking on a student's name in the sidebar, a component appears which shows: 
    - the selected student's name, speech goal, a form for adding new sessions
    - the student's speech goal
    - a form for taking and recording session data
    - a list of summaries of previous sessions, where the most recent session is at the top and the oldest at the bottom 

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

![Screenshot 2023-02-23 at 6 34 34 PM](https://user-images.githubusercontent.com/99021032/221013791-bc75ed1f-73e7-478c-a9f0-d3b1d6f65b1c.png)

### API Routes 

![Screenshot 2023-02-23 at 10 33 30 PM](https://user-images.githubusercontent.com/99021032/221035384-e562295a-7328-431c-bba7-4684732f6e26.png)
![Screenshot 2023-02-23 at 10 34 21 PM](https://user-images.githubusercontent.com/99021032/221035492-9efb2ea2-88b2-43e3-98f9-b67309334989.png)


## Frontend

### User Flow

<img width="954" alt="Screenshot 2023-02-23 at 10 05 59 PM" src="https://user-images.githubusercontent.com/99021032/221030101-e57dc199-7d65-4898-a115-4cf7dd88968b.png">

### React Components

<img width="1030" alt="Screenshot 2023-02-23 at 8 44 21 PM" src="https://user-images.githubusercontent.com/99021032/221013542-cbc3927a-5387-4552-bf51-200d7bd21872.png">

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
