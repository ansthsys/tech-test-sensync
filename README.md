# tech-test-sensync

## Server

API Documentation: [Postman](https://documenter.getpostman.com/view/29860763/2sAYJ3Egy2)

Directory: `./server`

### - System Requirement

- PHP >= 8.1
- Composer
- MySQL

### - Running Server

- clone repo

  ```
  git clone https://github.com/ansthsys/tech-test-sensync/
  ```

  ```
  cd tech-test-sensync
  ```
- setup server

  ```
  cd ./server
  ```
  
  ```
  composer install
  ```
  
  ```
  cp .env.example .env
  ```
  
  ```
  php artisan key:generate
  ```
- adjust the environment

  ```env
  DB_DATABASE=db_name
  DB_USERNAME=username
  DB_PASSWORD=password
  ```
- run server

  ```
  php artisan serve
  ```

## Client

### - System Requirement

- Node >= 20
- NPM >= 10

### - Running Client

- change directory to root
  ```
  cd tech-test-sensync
  ```
- setup client

  ```
  cd ./client
  ```
  
  ```
  npm install
  ```

- run client

  ```
  npm run dev
  ```
