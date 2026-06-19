## Milestone 4 - Purchase Management

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

### Business rules implemented
* Purchase increases stock
* Quantity > 0
* CostPrice > 0

### Verification
* Express app loaded successfully.
