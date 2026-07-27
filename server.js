/**
 * server.js
 * ---------
 * Express + Pug server for Assignment 2.
 *
 * Routes:
 *   GET /                      → landing page (links to both forms)
 *   GET /expense-request       → Medical & Travel Expense Request  (?dataset=1|2)
 *   GET /progress-report       → Worker Progress Report            (?dataset=1|2)
 *
 * All form values are "simulated backend data" pulled from /data —
 * the pages are rendered read-only; there is no on-screen data entry.
 * The ?dataset query parameter switches between the two datasets live
 * during the demo.
 */

const path = require('path');
const express = require('express');

const expenseData = require('./data/expenseData');
const progressData = require('./data/progressData');

const app = express();
const PORT = process.env.PORT || 3000;

// ---- View engine -----------------------------------------------------------
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ---- Static assets (CSS, logo image) --------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Reusable helper: read + sanitise the ?dataset query parameter.
 * Anything other than "2" falls back to dataset 1.
 */
function pickDataset(req) {
  return req.query.dataset === '2' ? 2 : 1;
}

// ---- Routes ----------------------------------------------------------------

// Landing page with links to both forms
app.get('/', (req, res) => {
  res.render('index', { title: 'WCB Manitoba — Assignment 2' });
});

// Form 1: Medical & Travel Expense Request
app.get('/expense-request', (req, res) => {
  const datasetId = pickDataset(req);
  res.render('expense-request', {
    title: 'Medical & Travel Expense Request — WCB Manitoba',
    datasetId,                       // used by the dataset switcher mixin
    data: expenseData[datasetId]     // simulated backend payload
  });
});

// Form 2: Worker Progress Report
app.get('/progress-report', (req, res) => {
  const datasetId = pickDataset(req);
  res.render('progress-report', {
    title: 'Worker Progress Report — WCB Manitoba',
    datasetId,
    data: progressData[datasetId]
  });
});

// ---- Start -----------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Assignment 2 server running at http://localhost:${PORT}`);
});
