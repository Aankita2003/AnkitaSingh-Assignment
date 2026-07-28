# Assignment 2 - WCB Manitoba Forms

## About the Project

This project is created using Express.js and Pug. The goal was to recreate two WCB Manitoba forms and display the data using Pug templates. The forms are designed to look similar to the original PDF and are also print-friendly.

## Forms

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

Clone the repository.

```bash
git clone <repository-url>
```

Go to the project folder.

```bash
cd Assignment-2
```

Install the dependencies.

```bash
npm install
```

Run the project.

```bash
npm start
```

Open your browser and visit:

```
http://localhost:3000
```

## Pages

Expense Request Form

```
http://localhost:3000/expense-request
```

Worker Progress Report

```
http://localhost:3000/progress-report
```

## Dataset

The project has two sample datasets. You can switch between them by changing the URL.

```
http://localhost:3000/expense-request?dataset=1
```

```
http://localhost:3000/expense-request?dataset=2
```

## Print

The forms are made for A4 printing and the layout remains clean when printed.

## What I Learned

While doing this assignment, I learned how to:

- Use Pug with Express.js
- Pass data from the backend to templates
- Create reusable layouts and mixins
- Organize project files
- Make web pages print-friendly

## Author

Ankita Singh

B.Tech - Computer Science & Engineering
