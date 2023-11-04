# Backend Functionality

Welcome to the detailed documentation of the backend functionalities of our E-commerce website. The backend is responsible for handling data, business logic, and serving data to the frontend.

## Controllers

### `ProductController.java`

The `ProductController` handles product-related operations. It includes the following functionalities:

- **Product Creation**: Allows administrators to create new products with details such as name, description, price, availability, and more.
- **Product Updates**: Permits product details to be modified, including name, description, price, and availability.
- **Product Listing**: Provides endpoints to list available products.
- **Product Category Management**: Manages product categories, allowing administrators to categorize products for easy navigation.

### `PurchasedCartController.java`

The `PurchasedCartController` provides functionality for managing a customer's cart. This controller enables customers to:

- **Add Products to Cart**: Allows customers to add products to their shopping cart.
- **View Cart Contents**: Provides endpoints to view the products in the cart.
- **Update Cart Items**: Permits customers to update the quantity of items in their cart.
- **Checkout**: Supports the checkout process, which involves finalizing the products in the cart and proceeding to payment.

### `RemoveCartController.java`

The `RemoveCartController` is responsible for managing the removal of products from a customer's cart. This controller offers the following features:

- **Remove Products from Cart**: Allows customers to remove products from their shopping cart.
- **Empty Cart**: Provides functionality to empty the entire cart.

## Data Access Objects (DAO)

### `AdminRepository.java`

The `AdminRepository` is responsible for managing interactions with the `adminuser` table. It includes methods for performing database operations related to shop owners. This DAO interacts with the `AdminUser` entity, and the corresponding database schema includes the following fields:

- `aid`: Unique identifier for each shop owner.
- `firstname`: First name of the shop owner.
- `lastname`: Last name of the shop owner.
- `email`: Unique email address (must be unique).
- `password`: Password for authentication.
- `shopname`: Shop name.
- `pannumber`: PAN (Permanent Account Number) of the shop owner.
- `aadhar`: Aadhar card number.

### `CustomerRepository.java`

The `CustomerRepository` is responsible for managing interactions with the `customer` table. This DAO handles customer-related database operations. The `Customer` entity includes the following fields:

- `cid`: Unique identifier for each customer.
- `firstname`: First name of the customer.
- `lastname`: Last name of the customer.
- `email`: Unique email address (must be unique).
- `password`: Password for authentication.
- `is_seller`: Indicates if the customer is also a shop owner (1 for yes, 0 for no).

### `InCartRepository.java`

The `InCartRepository` manages interactions with the `in_cart` table, focusing on shopping cart functionality. The `InCart` entity includes the following fields:

- `id`: Unique identifier for each entry in the shopping cart.
- `cid`: Identifier of the customer.
- `sku`: Stock Keeping Unit (SKU) of the product.
- `count`: Quantity of the product in the cart.

### `ProductRepository.java`

The `ProductRepository` is responsible for handling product-related operations and interacts with the `product` table. The `Product` entity contains the following fields:

- `id`: Unique identifier for each product.
- `sku`: Stock Keeping Unit (SKU) of the product.
- `name`: Product name.
- `description`: Product description.
- `unit_price`: Unit price of the product.
- `image_url`: URL to the product image.
- `active`: Indicates if the product is currently available (1 for yes, 0 for no).
- `units_in_stock`: Quantity of the product in stock.
- `date_created`: Timestamp of when the product was added.
- `last_updated`: Timestamp of the last update.
- `category_id`: Foreign key referencing the product category.

### `ProductCategoryRepository.java`

The `ProductCategoryRepository` manages interactions with the `product_category` table, focusing on product categorization. This DAO includes methods for:

- `id`: Unique identifier for each product category.
- `name`: Name of the product category.

## Database Interaction

The backend interacts with a relational database to store and retrieve data related to customers, shop owners, products, and product categories. This interaction is managed through the Data Access Object (DAO) classes, which handle the database operations.

## Database Schema
The structure and Design of the database which is used to store the data and retrieve.
## Tables

The database consists of the following tables:

- `adminuser`: Stores information about shop owners or administrators.
- `customer`: Contains data related to customers who use the platform.
- `in_cart`: Records products added to customers' shopping carts.
- `product`: Stores details about the available products for sale.
- `product_category`: Lists product categories to classify products.

## Table Details

### `adminuser`

- `aid`: Unique identifier for each shop owner.
- `firstname`: First name of the shop owner.
- `lastname`: Last name of the shop owner.
- `email`: Unique email address (must be unique).
- `password`: Password for authentication.
- `shopname`: Shop name.
- `pannumber`: PAN (Permanent Account Number) of the shop owner.
- `aadhar`: Aadhar card number.

### `customer`

- `cid`: Unique identifier for each customer.
- `firstname`: First name of the customer.
- `lastname`: Last name of the customer.
- `email`: Unique email address (must be unique).
- `password`: Password for authentication.
- `is_seller`: Indicates if the customer is also a shop owner (1 for yes, 0 for no).

### `in_cart`

- `id`: Unique identifier for each entry in the shopping cart.
- `cid`: Identifier of the customer.
- `sku`: Stock Keeping Unit (SKU) of the product.
- `count`: Quantity of the product in the cart.

### `product`

- `id`: Unique identifier for each product.
- `sku`: Stock Keeping Unit (SKU) of the product.
- `name`: Product name.
- `description`: Product description.
- `unit_price`: Unit price of the product.
- `image_url`: URL to the product image.
- `active`: Indicates if the product is currently available (1 for yes, 0 for no).
- `units_in_stock`: Quantity of the product in stock.
- `date_created`: Timestamp of when the product was added.
- `last_updated`: Timestamp of the last update.
- `category_id`: Foreign key referencing the product category.

### `product_category`

- `id`: Unique identifier for each product category.
- `name`: Name of the product category.

This detailed explanation provides insight into the various functionalities offered by the backend of the e-commerce website. You can expand on this information to include specific details about API endpoints, data flows, and additional features as needed.
