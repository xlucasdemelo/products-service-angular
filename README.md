# Product Service Angular

This is the Frontend solution for the project https://github.com/xlucasdemelo/products-service

## Technology Stack:
* Angular 7

## Getting Started

### Prerequisites

This application uses npm for dependency management, it is mandatory to install it.

```
npm: https://nodejs.org/en/
```

### Running with maven

[NOTE] The backend must be running in order to use the application, run it following the steps at https://github.com/xlucasdemelo/products-service

1.Clone the project

```
git clone https://github.com/xlucasdemelo/products-service-angular
```

2.Change the environment.ts with the ip that the backend is running

3.Start the application:

```
npm start
```

The application will run at http://localhost:4200

### Running With Docker

1.Build Docker image

```
docker build -t products-service-angular . 
```

4.Run Docker image changing the DB env variables

```
docker run -it -d --name products-angular -p 4200:80  products-service-angular
```

The application will run at http://localhost:4200

### AWS running application

The application its deployed in AWS using EBS.
Live demo at http://asellionproductsangular.eba-n74xmghk.us-east-2.elasticbeanstalk.com/

### Sample user

username: admin
password: password