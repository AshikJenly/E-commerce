# E-commerce Website Project

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installating-and-running-angular-app)
4. [Usage](#usage)
5. [Database Schema](#database-schema)
6. [Licensing](#licensing)


## Introduction

Welcome to our e-commerce application, A simple shopping app to meet your needs. Our platform is designed to provide a seamless and convenient shopping experience for both customers and shop owners. With two dedicated frontend applications, "FrontApp" for users and "AdminApp" for shop owners,The website is fully responsive which is designed for both Desktop and mobile screens. we cater to a wide range of users and offer unique features tailored to their specific needs.

### Architecture
![E-commerce_working](https://github.com/AshikJenly/E-commerce/assets/102305446/5a9ff279-cb29-4008-b773-75df8231a5d6)


### FrontApp: 

FrontApp is the user interface app that empowers customers to explore our vast collection of products, register for an account, and enjoy a hassle-free shopping journey.

#### Features:

- **User Registration**: Create an account to enjoy personalized shopping experiences.

- **Product Page**: Browse an extensive catalog of products, from the latest gadgets to trendy fashion items.

- **Product Details**: Dive into the details of your favorite products. Get comprehensive information and high-quality images.

- **Add to Cart**: Select the products you love and add them to your shopping cart with a single click.

- **Shopping Cart**: Review and edit the items in your cart, ensuring you have everything you need.

- **Checkout**: Head to the checkout page to confirm your order and choose your payment method.

- **Payment**: Securely complete your purchase by choosing from various payment options.

### AdminApp:

AdminApp is designed for shop owners and administrators. It allows you to manage your shop, add new products, and update existing listings with ease.

#### Features:

- **Shop Registration**: If you own a shop, you can register it on our platform and start selling your products.

- **Product Management**: Easily add, update, and delete products in your shop's inventory.

- **Inventory Control**: Keep track of your available stock and manage product variants effortlessly.

- **Sales Insights**: Gain valuable insights into your shop's performance and make data-driven decisions.

## Installating and Running Angular App

Follow these steps to set up and run the Angular app on your local development environment.

1. **Prerequisites**: Before you begin, ensure you have the following prerequisites installed:
   - [Node.js](https://nodejs.org/): Make sure you have Node.js installed.
   - [npm (Node Package Manager)](https://www.npmjs.com/): npm is usually included with Node.js.
   - [Angular CLI](https://angular.io/cli): Install the Angular CLI globally with the following command:

   ```bash
   npm install -g @angular/cli
   ```

2. **Clone the Repository**:
    ```bash
    git clone https://github.com/AshikJenly/E-commerce.git
    ```
3. **Navigate to the Folder**:
    ```bash
    cd E-Commerce
    ```
4. **Install Angular Dependencies**:
   ```bash
     npm install
   ```
5. **Frontend Application Setup**

    We have two frontend applications in our project navigate to the folders one-by-one:

      - **FrontApp**: This is the user interface app for our customers.
      - **AdminApp**: This is the admin dashboard for shop owners.

6. **Hosting Configuration**

    ```bash
    # Hosting FrontApp on the default port
    ng serve --project=frontapp
    
    # Hosting AdminApp on port 4202
    ng serve --project=adminapp --port 4202
    ```



### Backend Installation

  Follow the instructions on how to set up and configure the Java Spring Boot backend for your e-commerce application. The backend is responsible for handling data logic and interactions with the database.

1. **Prerequisites**

    Before getting started, ensure you have the following prerequisites:
  
    - Java Development Kit (JDK): Install a compatible JDK, preferably Java 8 or later.
    - Integrated Development Environment (IDE): We recommend using an IDE like IntelliJ IDEA or Eclipse for Java development.
    - Maven: Maven is a build automation tool for Java projects. Make sure it's installed on your system.
    - MySQL Database: Ensure that you have a MySQL database server installed and running. You should have the database schema set up as described in the previous section.
2. **Database Configuration**:
   
    In the 01-Backend folder navigate to `ecom/src/main/resources/application.properties` file, configure the database connection settings as follows:
    ```
        spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
        spring.datasource.username=your_username
        spring.datasource.password=your_password
        spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    ```

  Make sure to replace your_database_name, your_username, and your_password with your actual database details.  
3. **Build and Run the Application** :
    
   ```bash
    mvn spring-boot:run
   ```

## Usage

## Database Schema

The e-commerce platform is powered by a relational database that stores crucial information about customers, shop owners, products, and more. Below is an overview of the database schema.

![E-commerce_database](https://github.com/AshikJenly/E-commerce/assets/102305446/b687c416-2603-41d6-99b2-1dc2b65720f7)


## Licensing
Specify the project's license and any terms and conditions for usage. Clarify permissions and restrictions for potential users.

