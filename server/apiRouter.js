const express = require('express');
import pool from './db';


const router = express.Router();

router.get('/books', (req, res) => {
    pool.query('SELECT * from books', [], (err, result) => {
    console.log(result.rows);
    res.send(result.rows);
});
});

router.get('/books/:bookId/ratings', (req, res) => {
    pool.query('SELECT * from reviews WHERE book_id = $1', [req.params.bookId], (err, result) => {
    console.log(result.rows);
    res.send(result.rows);
});
});

// catch all
router.get('*', (req, res) => {
    res.send('Check route please...\n');
});

export default router;
