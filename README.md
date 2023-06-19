# Expense Tracker App

This is a simple expense tracker application built with React, Bootstrap, and Zod. It allows users to track their expenses by entering a description, amount, and category for each expense item. The application provides filtering functionality to view expenses based on selected categories.

## Features

- Add new expense items with a description, amount, and category.
- View and filter expenses based on selected categories.
- Delete expense items.
- Persist data in the local storage to retain expenses even after page reload.
- Remember the selected category even after page reload.

## Installation

To run the Expense Tracker app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <https://github.com/Haitam-Elgharras/Expense-Tracker-App>
   ```

2. Navigate to the project directory:

   ```bash
   cd expense-tracker-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the Expense Tracker app.

## Usage

1. Enter a description, amount, and category for the new expense item in the provided form.
2. Click the "Add Expense" button to add the item to the expense list.
3. Use the category filter to select a specific category or choose "All" to view all expenses.
4. Click the "Delete" button next to an expense item to remove it from the list.

The app will automatically save and load your expenses from the local storage, ensuring your data is preserved even if you reload the page.

## Technologies Used

- React - JavaScript library for building user interfaces.
- Bootstrap - CSS framework for responsive and mobile-first web development.
- Zod - TypeScript-first schema validation library.
- react-hook-form - Library for flexible and efficient form validation and management.
- immer - Library for state mutation with simpler immutable updates.

## Contributions

Contributions to the Expense Tracker app are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.
