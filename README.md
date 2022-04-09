# Quinntessence Blog and Store

## <u>Description</u>

### Purpose

This site is a e-commerce / blog site for a hand-made bracelet company. The goal to provide a central location for customers access any information needed.

### MVP

<h6><u>Customer View</u></h6>

- View past and available products
- Submit purchases through site
- Submit inquiries through a form for custom orders / feedback.
- View blog with original content from site owner + imports from social media

<h6><u>Admin View</u></h6>

- Manage blog by creating new posts
  - store images / video for blog posts
- Manage gallery to show new and old products for purchase
  - store images
- View past / present orders to track and process until products are shipped
- Provide a view that organizes and visualizes profit / loss statement
- Account manager

## <u>Front-End</u>

### Components

- Home.js
  - Welcome to site page with some about-us content and links to various views
- Blog.js
  - View with posts on new projects, recipes, product reviews or anything the site owner wants to share with the constituents
- Products.js
  - View which displays past and present products in cards. products that are currently available will be able to be added to cart for purchase
- Orders.js
  - This will show all orders submitted through the site. Customers can view their orders status with an email/phone number + an order number.
  - Orders page will also be where custom orders can go in and pay for the product prior to the work being started.
- Cart.js
  - This is a standard cart that allows review of purchase and processes payment and provides receipt
- Contact.js
  - This is a form that will send an email to the site owner with requests / feedback. There can also be other contact methods added here (phone number, address, facebook, instagram, etc.)
- Admin.js
  - This will be the home page for the site owner allowing login and access to other views
- BlogAdmin.js
  - This will give site owner access to create, edit and remove blog posts to the customer's view.
- ProductsAdmin.js
  - Similarly, this will allow site owner to add, edit and remove products listed from the gallery.
- OrdersAdmin.js
  - This will be a list view of all orders (sortable, filterable) received and can be expanded to view all details
- Expense.js
  - View will visualize profits and losses for business. Potentially will export to excel for printing.
  - Will also need feature to add expenses or orders that originate outside the website.

### Routes/Tree (_protected views italized_)

- App.js
  - NavBar.js
  - Routes.js
    - Home.js
    - Blog.js
      - BlogCard.js
      - BlogExpanded.js
    - Products.js
      - ProductCard.js
      - ProductExpanded.js
    - Orders.js
      - OrderSearch.js
      - OrderCard.js
    - Cart.js
      - Still theorizing
    - Contact.js
    - _LoginAdmin.js_
    - _Admin.js_
      - AdminCard.js
    - _BlogAdmin.js_
      - BlogCard.js
      - BlogExpanded.js
      - CreateBlog.js
    - _ProductsAdmin.js_
      - ProductCard.js
      - ProductExpanded.js
      - CreateProduct.js
    - _OrdersAdmin.js_
      - OrderRow.js
      - OrderCard.js
      - OrderCreate.js
        - FindCustomer.js
    - _ExpenseAdmin.js_
      - ExpenseRow.js
      - CreateExpense.js
  - Footer.js

## <u>Back-End</u>

### Schema

- users
  - user_id (PK)
  - email
  - pass/hash
- customers
  - customer_id (PK)
  - name
  - phone_number
  - email
- blogs
  - blog_id (PK)
  - media
  - title
  - content
- products
  - product_id (PK)
  - name
  - image
  - description
  - cost
  - status
- orders
  - order_id (PK)
  - customer_id (FK)
  - products
  - cost
  - address
  - details
  - images
  - receipt
- expenses
  - expense_id (PK)
  - order_id (FK)
  - name
  - date
  - value
  - receipt

### Server

- Auth EPs
  - login (_post; body: email, password_)
  - register (_post; body: email, password_)
  - updateUser (_put; params: userId; body: email, password_)
  - deleteUser (_put; params: userId_)
- Customer EPs
  - createCust (_post; body: name, phoneNumber, email_)
  - getCust (_get; params: phoneNumber, email_)
- Blog EPs
  - createBlog (_post; body: media, title, content_)
  - getBlogs (_get; query: limit, start_)
  - updateBlog (_put; body: blogId, media, title, content_)
  - deleteBlog (_put; params: blogId_)
- Product EPs
  - createProduct (_post; body: name, image, desciption, cost_)
  - getProducts (_get; query: limit, start_)
  - updateProduct (_put; body: productId, name, image, description, cost, status_)
  - deleteProduct (_put; params: productId_)
- Order EPs
  - createOrder (_post; body: customerId, products, cost, address, details, images, receipt_)
  - getOrder (_get; body: orderId, contactInfo_)
  - getOrders (_get; query: limit, start_)
  - updateOrder (_put; body: orderId, customerId, products, cost, address, details, images, receipt_)
  - updateOrderStatus (_put; body: orderId, status_)
  - deleteOrder (_put; params: orderId_)
- Expense EPs
  - createExpense (_post; query: orderId; body: name, date, value, receipt_)
  - getExpenses (_get; query: limit, start, startDate, endDate_)
  - updateExpense (_put; body: expenseId, orderId, name, date, value, receipt_)
  - deleteExpense (_put; params: expenseId_)
