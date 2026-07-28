# Assignment 2 – WCB Manitoba Forms (Pug + Express)

## Project Overview

This project recreates two WCB Manitoba forms using **Pug**, **Express.js**, **HTML**, and **CSS**. The forms are designed to match the original layout and are optimized for A4 printing. All form data is displayed using sample backend datasets.

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

## Features

- Forms rendered using Pug templates
- Two WCB Manitoba forms
- Read-only form data
- Two sample datasets that can be switched
- Print-friendly A4 layout
- Shared layout and reusable Pug mixins
- Clean and organized project structure

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

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Go to the project folder:

```bash
cd Assignment-2
```

Install the required packages:

```bash
npm install
```

Start the server:

```bash
npm start
```

Open your browser:

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

The project includes two sample datasets.

Open the forms with either dataset by using the URL below:

```
http://localhost:3000/expense-request?dataset=1
```

```
http://localhost:3000/expense-request?dataset=2
```

## Print Support

- A4 page layout
- Clean print formatting
- Footer stays in the correct position
- Table rows do not split across pages

## What I Learned

While working on this project, I learned how to:

- Build a web application using Express.js
- Create reusable templates with Pug
- Organize project files properly
- Render dynamic data using templates
- Design pages that print correctly
- Reuse code with Pug mixins

## Future Improvements

- Connect the forms to a database
- Add user authentication
- Allow users to submit forms online
- Generate downloadable PDF versions

## Author

**Ankita Singh**

B.Tech – Computer Science & Engineering
