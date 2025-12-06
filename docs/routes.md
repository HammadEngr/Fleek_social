# API ROUTES DESCRIPTION

## auth.routes.js

POST- sign in
/signin

POST- sign up
/signup

POST- signout user
/signout

POST- refresh token
/refresh

GET- activate user
/activate/:token

POST- forgot password
/forgotPassword

GET- reset password
/resetPassword/:token

## users.routes.js

GET- user
/:id

DELETE- user
/:id

GET- all users
/all

## userUpdates.routes.js

POST- add user details
/:id/update

POST- add user experience
/exp/:userid"

GET- get user experiences
/exp/:userid"

PATCH- update user experience
/exp/:userid/:expid
