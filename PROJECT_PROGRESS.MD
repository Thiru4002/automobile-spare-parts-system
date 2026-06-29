[... existing content ...]

## Completed: Milestone 3 - Product Management

### Files created

* `backend/src/models/product.js`
* `backend/src/controllers/productController.js`
* `backend/src/routes/productRoutes.js`

### Files modified

* `backend/src/app.js`
* `PROJECT_PROGRESS.MD`

### Routes added

Base route:

* `/api/v1/products`

Endpoints:

* `POST /api/v1/products` - create a product
* `GET /api/v1/products` - get all products
* `GET /api/v1/products/:id` - get one product by id
* `PUT /api/v1/products/:id` - update one product by id
* `DELETE /api/v1/products/:id` - delete one product by id

### Business rules implemented

Product fields:

* `name`
* `category` (ObjectId reference to Category)
* `brand` (ObjectId reference to Brand)
* `sellingPrice`
* `currentStock`

Product validation rules:

* `name` is required
* `name` + `brand` is unique (compound index)
* `category` is required
* `brand` is required
* `sellingPrice` is required and must be >= 0
* `currentStock` is >= 0

### Important design decisions

* Followed the established project pattern: Model -> Controller -> Route.
* Matched the existing response format for consistency.
* Used `populate("category brand")` in `GET` endpoints to return related data.
* Implemented a compound index `productSchema.index({ name: 1, brand: 1 }, { unique: true })` for the uniqueness rule.
* Used `runValidators: true` in updates to enforce business rules.
* Used `async/await` and `try/catch` consistently.
* Registered Product routes in `app.js` under the `/api/v1/products` API path.

### Verification

* Loaded the Express app successfully using:

```bash
node -e "require('./src/app'); console.log('app loaded')"
```

## Completed: Milestone 4 - Purchase Management

### Files created
* `backend/src/models/purchase.js`
* `backend/src/controllers/purchaseController.js`
* `backend/src/routes/purchaseRoutes.js`

### Files modified
* `backend/src/app.js`

### Routes added
Base route:
* `/api/v1/purchases`

Endpoints:
* `POST /api/v1/purchases` - create a purchase and update stock
* `GET /api/v1/purchases` - get all purchases
* `GET /api/v1/purchases/:id` - get one purchase by id (with populated product/supplier)

### Business rules implemented
* Purchase increases stock
* Quantity > 0
* CostPrice > 0

### Important design decisions
* Followed the established project pattern: Model -> Controller -> Route.
* Verified that the purchase updates the stock in the Product model correctly.

### Verification
* Loaded the Express app successfully.

## Completed: Milestone 5 - Billing

### Files created
* `backend/src/models/bill.js`
* `backend/src/controllers/billController.js`
* `backend/src/routes/billRoutes.js`

### Files modified
* `backend/src/app.js`

### Routes added
Base route:
* `/api/v1/bills`

Endpoints:
* `POST /api/v1/bills` - create a bill (multiple products, updates stock)
* `GET /api/v1/bills` - get all bills

### Business rules implemented
* Multiple line items per bill
* Bill decreases stock
* Stock check before billing
* Store selling price at sale time
* Stock cannot become negative

### Important design decisions
* Followed the established project pattern: Model -> Controller -> Route.
* Used MongoDB transactions to ensure data consistency during bill creation and stock updates.
* Verified that bill creation fails if any product has insufficient stock.

### Verification
* Loaded the Express app successfully.
