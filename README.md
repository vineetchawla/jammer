# jammer

### Tasks completed

1. Added all the necessary API endpoints with JWT authentication. Needs a header for bearer token. Sent on user creation and/or login
2. Added docker-compose and dockerfile. Server should start just with "docker-compose up" at localhost:3000
3. Added some sample integration tests for routes and a unit test for helper
4. Data is persisted in mongodb, via mongoose ORM

### Tasks to be done

1. Adding a swagger API documentation
2. increase supertest API tests
3. Joi validation for ensuring the correct body received in post requests
4. A couple of conditions mentioned in the comments in the routes
5. A postman based API test for testing a complete user creation/ jam flow

### Sequence to check the functioning for API

- Create user : POST req => localhost:3000/users, Body => {name:'vineetchawla', password:'test', email:'vineetchawla19@gmail.com'}
  Returns the token required for authentication

- Get user details: GET req => localhost:3000/users/me
  Returns user details

- Add skills for user: POST req => localhost:3000/skill/, Body => { ['guitar']}

- Add new skill of user: PUT req => localhost:3000/skill/, Body => {['keyboard']}

- Create jam : POST req => localhost:3000/jam/create, Body =>
  { name: 'jam1', totalMembers: 3, roles: ['guitar', 'keyboard']}

- Join a jam: POST req => localhost:3000/participate/join, Body => { name: 'jam1'}

- Remove yourself from jam: DELETE req => localhost:3000/participate/remove/jam1

- Start a jam: GET req => localhost:3000/participate/start/jam1

### Other additional routes:

- get all jams: GET req => localhost:3000/jam/all

- Get jams of a user: GET req => localhost:3000/jam/user
  returns an object with jams -> { created, partricipated }

- Find a specific jam: GET req => localhost:3000/jam/find/jam1

- Delete a jam: DELETE req => localhost:3000/jam/jam1
