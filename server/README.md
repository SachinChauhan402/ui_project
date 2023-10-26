# 10XTD_Server

## Getting started

## Auth api 
API's: 
1) /auth/login/ <br />
    request body = {
        "username": "username",
        "password": "password"
    } <br />
    api response is  <br />
    response = {
        "refresh": "",
        "access": "",
        "id": 11,
        "username": "username",
        "first_name": "firstname",
        "last_name": "lastname",
        "email": "email"
    }

2) /auth/register/ <br />
    request body = {
        "username": "username",
        "password": "password",
        "password2": "password2",
        "email": "email",
        "first_name": "firstname",
        "last_name": "lastname"
    } <br /> 
    api response is <br />
    response = {
    "user": {
        "id": id,
        "password": "password",
        "last_login": null,
        "is_superuser": false,
        ....
    },
    "message": "User Created Successfully.  Now perform Login to get your token"
    }

3) /auth/change_password/<user_id> <br />
    request body = {
        "old_password": "old_password",
        "password": "password",
        "password2": "password2"
    }


## How to use Token based authentication ?
for token based authentication you need to pass permission_classes in your api calss <br />
example:- <br />
class APIClass(): <br />
    permission_classes = (IsAuthenticated,)

if permission_classes added in your api class then your api is protected. without login api not accessible. <br />
for accessig the api you need to pass Authorization token on api call header. <br />
example: <br />
headers: {
   Authorization: 'Bearer {access token} //you get this token after login 
} <br />
after login you get two token one is access token and another is refresh token. <br />

### Access token and refresh token:
access token used for identify the login user
we used refresh token when our access token experied but we dont want to login again. this time we use refresh token.
example:- <br />

api:- /auth/login/refresh/ <br /> 
you need to call this api with request body <br />  
request body = {
    "refresh": ""
} <br />
in request body you need to send refresh token. you get this refresh token after login.
in this api response you get the new access token.



