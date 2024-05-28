const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Pool setup
const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'wishlist',
    password: 'password',
    port: 5432,
});

// Routes
app.get('/wishes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM wishes');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/wishes', async (req, res) => {
    try {
        const { wish, description } = req.body;
        const result = await pool.query('INSERT INTO wishes (wish, description) VALUES ($1, $2) RETURNING *', [wish, description]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/wishes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { wish, description } = req.body;
        const result = await pool.query('UPDATE wishes SET wish = $1, description = $2 WHERE id = $3 RETURNING *', [wish, description, id]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/wishes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM wishes WHERE id = $1', [id]);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
