## Database

Make the mariadb container up for database. Runs in the port 3306

    docker-compose up

## Backend

Start the server

    npm run start

To run tests

    npm run test

Swagger

    Go to http://localhost:3000/api

APIs: 
- GET http://localhost:3000/users to get all usesrs 
- GET http://localhost:3000/users/:id to get single user 
- POST http://localhost:3000/users/login to authenticate

## Frontend

Start the server

    npm run start

Routes: 
- http://localhost:8080 home 
- http://localhost:8080/profile profile 
- http://localhost:8080/users ADMIN users list access
