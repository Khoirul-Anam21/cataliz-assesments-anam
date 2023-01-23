# RESTful API Sederhana CRUD data pribadi seseorang (Assesment 3)
## Aplikasi menggunakan clean architecture (Repository Pattern)
Aplikasi CRUD sederhana tentang mengedit data seseorang.

Menggunakan simulasi database menggunakan JSON karena fokus pada penerapan arsitektur saja.

**Aplikasi berbasis RESTful API, pengujiannya menggunakan aplikasi testing API seperti Postman, Insomnia, dll.**

Dokumentasi: https://documenter.getpostman.com/view/19302442/2s8ZDa2M1p

Daftar routing:

POST (id auto generate): 

    http://localhost:8000/people
```json
contoh body:
{
    "name": "XSOKXNSONXKS",
    "age": 99,
    "address": "Batu, East Java",
    "sexType": "male",
    "married": false
}
```
GET: 

    http://localhost:8000/people

PUT:

    http://localhost:8000/people/:id
```json
contoh body:
{
    "name": "XSOKXNSONXKS",
    "age": 99,
    "address": "Batu, East Java",
    "sexType": "male",
    "married": false
}
```

DELETE:

    http://localhost:8000/people/:id


