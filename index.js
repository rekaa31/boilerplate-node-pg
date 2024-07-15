// 1
const express = require('express');
const pool = require('./db');

// 2
// Mendefinisikan aplikasi express
const app = express();
// Mendefinisikan middleware
app.use(express.json());

// 3
// Mendefinisikan route
// Basic route
app.get('/', (req, res) => {
	res.send('Hello, World!');
});

// Get all kecamatan
app.get('/kecamatan', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM kecamatan');
		res.json(result.rows);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// 4
// Definisi Port dan menjalankan server
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});