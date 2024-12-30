# How to run
- install dbmate
```sh
go install https://github.com/amacneil/dbmate 
```
- run migration
```sh
# dont forget to change the MIGRATE_CMD
dbmate -e MIGRATE_CMD -d migration/ up
```
- run server
```sh
node app.js  
```

# How to test
## Postman
if you want to test the api, you can use postman, and import the postman collection file
## Curl
`POST`
```sh
curl -X POST http://localhost:3000/api/users -H 'Content-Type: application/json' -d '{"name":"test","email":"test@test.com"}'
```

`GET all users`
```sh
curl -X GET http://localhost:3000/api/users
```

`GET user by id`
```sh
curl -X GET http://localhost:3000/api/users/1
```

`PUT`
```sh
curl -X PUT http://localhost:3000/api/users/1 -H 'Content-Type: application/json' -d '{"name":"test","email":"test@test.com"}'
```

`DELETE`
```sh
curl -X DELETE http://localhost:3000/api/users/1    
```