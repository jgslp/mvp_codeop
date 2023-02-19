# Practicum

This MVP project was created for CodeOp's Full Stack program.

This web app allows speech-language pathologists to keep track of their caseload, including student data and due dates for paperwork. It also allows SLPs to take and record data and session notes.

## Set-up Instructions

Open two terminal windows, one for the backend and one for the frontend.
- Backend: Run `npm install` in the project's root folder to install Node dependencies. Run `npm start` in the root folder to start the Express server on port 5001.
- Frontend: Enter `cd client` to navigate to the client folder, and then run `npm install` to install React dependencies. Run `npm start` to start the client server on port 3000.

Create an .env file in the project's root folder and enter the following:
DB_USERDB_HOST=localhost
DB_USER=root
DB_NAME=speech
DB_PASS=your_password