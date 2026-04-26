const express = require('express');
const router = express.Router();
const fs = require('fs');
const csv = require('csv-parser');

const allQuotes = [];   //  store everything here once

fs.createReadStream('quotes/quotes.csv')
  .pipe(csv())
  .on('data', (row) => {
    allQuotes.push(row);
  })
  .on('end', () => {
  
  });



router.get('/search', (req, res) => {

    const { author, category } = req.query;

    let result = allQuotes;   // use preloaded data

    // 🔍 filter by author
    if (author) {
        result = result.filter(row =>
            row.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    // filter by category
    if (category) {
        result = result.filter(row =>
            row.category.toLowerCase().includes(category.toLowerCase())
        );
    }

    // no results check
    if (result.length === 0) {
        return res.json({ message: "No quotes found" });
    }

    // 🎲 random pick
    const random_quot = result[Math.floor(Math.random() * result.length)];

    res.json(random_quot);
});

module.exports = router;