# To-DO Application

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This is a MERN Stack (MongoDB, Express, React, Node.js) application that allows users to manage their to-do list.

## Features
- User Accounts: Users can create accounts and login to manage their personal to-do lists.
- Add Tasks: Users can add new tasks to their list, providing the description of their task.
- Mark Tasks as Completed: Users can mark tasks as completed to remove them from the active list.
- Delete Tasks: Users can delete tasks from their list if they are no longer needed.

## Technologies
* <b>Frontend</b>: <i>React.js</i>
* <b>Backend</b>: <i>Node.js</i>, <i>Express.js</i>
* <b>Database</b>: <i>MongoDB</i>
* <b>Authentication</b>: <i>Bcrypt</i> (for password hashing)

## Installation
Clone the repository using the following command: `git clone git@github.com:dependentmadani/TO-DO-App.git`

### Install dependencies:
- For the frontend: `cd frontend && npm install`
- For the backend: `cd backend && npm install`

### Create a .env file:
- Navigate to the backend directory and create a file called `.env`. This file will store your environment variables. Add the following information:
```
    DB_CONNECTION_STRING=your_mongo_uri
    PORT=your_port
    JWT_SECRET=your_secret
```


<b>DB_CONNECTION_STRING</b>: Your MongoDB connection string.<br/>
<b>PORT</b>: The port on which the backend server will run.</br>
<b>JWT_SECRET</b>: A secret key used for authentication purposes.</br>


- Start MongoDB: mongod
- Start the backend server: `cd backend && npm start`
- Start the frontend server: `cd frontend && npm start`

### Open your browser:
Navigate to http://localhost:5173 to access the application, or other port. Depending on your available port, it should be shown on your terminal after running frontend server.

## Usage
- Register for an account or login with an existing account.
- Click on "Add New" to add a new task.
- Add the task you want to do, then click on "Add".
- If the task is done, click on the little check box which let you know that the task is completed.
- You can delete the task whenever you want, by clicking on the "delete" button.
- You can also change your user info by clicking on "Edit" below your email.

## Contributing
Feel free to fork this repository and contribute to the project! Please make sure to open a pull request for any changes you would like to be merged.
