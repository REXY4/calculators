# express with typescript

<h5>Singleton Design Pattern<h5>

The Singleton Design Pattern is a pattern that restricts the instantiation of a class to only one object and provides global access to that instance. In this project, the Singleton pattern is used to manage the logger object that is utilized throughout the project.
Description

This project is a simple API built with TypeScript and the Express.js library. The project offers the following features:

    User authentication: users can create accounts, log in, and log out of the system.
    Customizable logger: the system has a logger that can be configured based on user preferences.
    API recruitment: users can access the API to search for job vacancies.

Installation Guide

Follow these steps to install the project
1. Clone this repository using the command:

  ```
    git clone https://github.com/REXY4/template-typescript-express.git

   ```
2. Install the required dependencies using the command:
```
npm install
```    
   
How to Use

To use this API, follow these steps:
1. copy api .env-example ke .env with commandline:
        ```
        cp .env-example .env

        ```
2. jalankan app dengan perintah command line :
    ```
    npm run start:dev
    ```        

example api use :
1. user
- create user
    ```
    method : POST url : http://localhost:3000/api/v1/user/register 
    ```
- login
    ```
    method POST url : http://localhost:3000/api/v1/user/login
    ```
- check user
    ```
    method GET url : http://localhost:3000/api/v1/user/check
    ```    
2. reqruitment 
- get all data with filter query param `description`, `full_time`,`location`,`page`    
    ```
    method GET url :http://localhost:3000/api/v1/reqruitment
    ```
- get detail data 
    ```
    method GET url : http://localhost:3000/api/v1/reqruitment/{id}
    ```    


TypeScript

TypeScript is a superset of JavaScript that offers features such as static type-checking, class and module support, and support for ES6 features. In this project, TypeScript is utilized to improve code quality by adding type-checking and OOP features.

Here are the specific characteristics of TypeScript in OOP:

    Class & Object: TypeScript supports the use of class and object in OOP.
    Inheritance: TypeScript supports inheritance by using the extends keyword.
    Abstraction: TypeScript supports the use of abstract class and method.
    Polymorphism: TypeScript supports the use of interface and method overload.
    Encapsulation: TypeScript supports the use of access modifiers such as public, private, and protected.