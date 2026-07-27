# Assignment 2 – WCB Manitoba Forms (Pug + Express)

## Project Overview

This project recreates two WCB Manitoba forms using **Pug**, **Express.js**, **HTML**, and **CSS**. The forms are print-ready (A4 size) and display data from simulated backend datasets.

### Forms Included

- Medical & Travel Expense Request
- Worker Progress Report

---

## Technologies Used

- Node.js
- Express.js
- Pug Template Engine
- HTML
- CSS
- JavaScript

---

## Project Features

- Rendered using Pug templates
- Two WCB Manitoba forms
- Read-only form data
- Two datasets that can be switched dynamically
- Print-friendly A4 layout
- Shared layouts and reusable mixins
- Clean and organized project structure

---

## Project Structure

```
Assignment-2
│
├── data/
├── public/
├── views/
│   ├── mixins/
│   ├── expense-request.pug
│   ├── progress-report.pug
│   └── layout.pug
│
├── server.js
├── package.json
└── README.md
```

---

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Go to the project folder

```bash
cd Assignment-2
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
npm start
```

5. Open your browser

```
http://localhost:3000
```

---

## Available Pages

### Medical & Travel Expense Request

```
http://localhost:3000/expense-request
```

### Worker Progress Report

```
http://localhost:3000/progress-report
```

---

## Dataset Switching

The project includes two sample datasets.

Use the dataset switcher to change between:

- Dataset 1
- Dataset 2

Example:

```
http://localhost:3000/expense-request?dataset=1
```

```
http://localhost:3000/expense-request?dataset=2
```

---

## Print Support

- A4 page size
- Clean print layout
- Footer positioned correctly
- Table rows do not split across pages

---

## Learning Outcomes

Through this project, I learned:

- Building web applications using Express.js
- Creating reusable templates with Pug
- Organizing project folders
- Rendering dynamic data
- Creating print-friendly web pages
- Writing reusable code using mixins

---

## Future Improvements

- Connect forms with a real database
- Add user authentication
- Enable online form submission
- Generate downloadable PDF reports

---

## Author

**Ankita Singh**

B.Tech – Computer Science & Engineering
