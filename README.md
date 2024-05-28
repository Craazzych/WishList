```
docker-compose build
```
```
docker-compose up -d
```

### for testing API
```sh
curl -X DELETE http://localhost:5001/wishes/1
```
```sh
curl -X PUT http://localhost:5001/wishes/1 -H "Content-Type: application/json" -d '{"wish":"Updated Wish","description":"Updated Description"}'
```
```sh
curl -X POST http://localhost:5001/wishes -H "Content-Type: application/json" -d '{"wish":"Test Wish","description":"Test Description"}'       
```
```sh
curl -X GET http://localhost:5001/wishes         
```
