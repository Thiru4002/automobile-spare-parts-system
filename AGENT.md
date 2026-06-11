# Automobile Spare Parts Shop Management System

## Project Goal

Build a full-stack Automobile Spare Parts Shop Management System using React, Node.js, Express, and MongoDB.

## Architecture

* Monolithic application
* Single Git repository
* Backend and frontend in same repository
* CommonJS syntax (require/module.exports)

## Backend Structure

src/

* config
* controllers
* middleware
* models
* routes
* utils

Pattern:
Model → Controller → Route

## Reference Projects

Before implementing new code, review these repositories to understand coding conventions.

Task Manager Backend:
https://github.com/Thiru4002/task-manager-api

Consent Management Backend:
https://github.com/Thiru4002/secure-data-sharing-system-backend

Use these repositories for:

* Controller structure
* Route organization
* Response format
* Middleware patterns
* Error handling conventions

If a reference repository conflicts with this project guide, follow `AGENT.md`.

## Coding Style Consistency

Reference repositories define the preferred coding style.

Before implementing new features:

1. Review the reference repositories.
2. Identify coding patterns used in controllers, routes, middleware, and models.
3. Compare existing code with the preferred patterns.
4. Refactor existing code to match the reference style when appropriate.

Examples:

* Use the same controller structure.
* Use the same destructuring patterns.
* Use the same response format.
* Use the same naming conventions.
* Use the same error handling style.

The agent may modify existing code to improve style consistency.

Do not change:

* Business rules
* Validation rules
* Database design
* API behavior

Only improve coding style and consistency.

## API Convention

Base URL:
/api/v1

Examples:
/api/v1/categories
/api/v1/brands
/api/v1/products

## Coding Rules

* Use async/await
* Use try/catch in controllers
* Use meaningful variable names
* Keep controllers simple
* Use HTTP status codes correctly

## Business Rules

### Customer

Customer means:

* Mechanic
* Workshop
* Garage Owner

Walk-in customers are not stored.

### Product

Fields:

* Name
* CategoryId
* BrandId
* SellingPrice
* CurrentStock

Unique Rule:
Name + Brand must be unique.

### Category

Fields:

* name
* description

Rules:

* name required
* unique
* trim
* lowercase

### Brand

Fields:

* name
* description

Rules:

* name required
* unique

### Supplier

Fields:

* name
* phone
* address

Rules:

* phone required
* phone unique

### Purchase

* Increases stock
* Quantity > 0
* CostPrice > 0

### Bill

* Decreases stock
* Stock cannot become negative
* Store SellingPriceAtSaleTime

Statuses:

* PAID
* PARTIAL
* PENDING

## Git Workflow

One feature = one commit

Examples:

* Add category module
* Add brand module
* Add supplier module
* Add product module

## Development Approach

Implement one module at a time.

Order:

1. Category
2. Brand
3. Supplier
4. Customer
5. Product
6. Purchase
7. Bill
8. Dashboard
