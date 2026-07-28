# Assignment 2 - WCB Manitoba Forms

## Project Overview

This project is built using **Node.js**, **Express.js**, and **Pug**. The objective of this assignment is to recreate two WCB Manitoba forms using Pug templates and display the data from sample datasets. The forms are designed to closely match the original layout and are optimized for A4 printing.

## Forms Included

- Medical & Travel Expense Request
- Worker Progress Report

## Technologies Used

- Node.js
- Express.js
- Pug
- HTML
- CSS
- JavaScript

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

## How to Run

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Open the project folder

```bash
cd Assignment-2
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

### 5. Open in your browser

```
http://localhost:3000
```

## Available Pages

### Medical & Travel Expense Request

```
http://localhost:3000/expense-request
```

### Worker Progress Report

```
http://localhost:3000/progress-report
```

## Dataset Switching

The project contains two sample datasets. You can switch between them by changing the dataset value in the URL.

Dataset 1

```
http://localhost:3000/expense-request?dataset=1
```

Dataset 2

```
http://localhost:3000/expense-request?dataset=2
```

## Print Support

- A4 page layout
- Print-friendly design
- Footer stays in the correct position
- Tables are formatted properly for printing

## Demo Video

Project demonstration:

https://youtu.be/T5UJ60y2pm4?si=HTtZuJVzlj-b0nxc

## What I Learned

While working on this assignment, I learned how to:

- Build an Express.js application
- Use Pug as a template engine
- Pass data from the backend to Pug templates
- Create reusable layouts and mixins
- Organize project files
- Design print-friendly web pages

## Future Improvements

- Connect the forms to a database
- Add user authentication
- Allow users to submit forms online
- Generate downloadable PDF files

## Author

**Ankita Singh**

B.Tech – Computer Science & Engineering
