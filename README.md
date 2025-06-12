

---


A **CRUD (Create, Read, Update, Delete)** application for managing books using **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

## Features

* Add new books with details like name, title, author, selling price, and publishing date.
* View a list of all books in a table format.
* Update book details directly from the table.
* Delete books with a single click.
* Backend implemented using Express.js with MongoDB as the database.

---

## Tech Stack

### Frontend

* **React.js**: Build dynamic UI.
* **Tailwind CSS**: Styling components.
* **React Icons**: Adding icons for action buttons.

### Backend

* **Node.js**: Server-side runtime.
* **Express.js**: Framework for handling routes and middleware.
* **MongoDB**: NoSQL database for storing book details.
* **Axios**: HTTP client for API calls.

---

## Installation and Setup

### Prerequisites

* Node.js installed on your system.
* MongoDB setup locally or a cloud MongoDB instance.

### Steps

1. Clone the repository:

   ```bash
   git clone (https://github.com/palakash26/CRUD_React.git)
   ```

2. Install dependencies for both backend and frontend:

   * Backend:

     ```bash
     cd backend
     npm install
     ```
   * Frontend:

     ```bash
     cd client
     npm install
     ```

3. Configure `.env` file for the backend:

   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   ```

4. Start the application:

   * Backend:

     ```bash
     npm start
     ```
   * Frontend:

     ```bash
     npm start
     ```

5. Open the application in your browser:

   ```
   http://localhost:3000
   ```

---

## API Endpoints

### Book Routes

* **GET /booklists**: Retrieve all books.
* **POST /addbook**: Add a new book.
* **PUT /updatebook**: Update an existing book.
* **DELETE /deletebook/\:id**: Delete a book by ID.

---

## Folder Structure

```
book-management-system/
├── backend/
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── models/
│   │   └── Book.js
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Home.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
└── README.md
```

---

## Screenshots

* **Home Page**

  * Displays all books in a table with actions for update and delete.
* **Add/Update Book Form**

  * User-friendly form for adding or updating book details.

---

## Contributing

Feel free to fork the project and open a pull request with improvements or new features.

---

## License

This project is licensed under the MIT License.

---

Replace `palakash26` and other placeholders with actual details from your project setup.
