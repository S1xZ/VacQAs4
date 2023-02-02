const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// app.get('/api/v1/hospitals', (req, res) => {
//     //1. res.send('<h1>Hello from Express</h1>');
//     //2. res.send({ name: 'Brad' });
//     //3. res.json({ name: 'Brad' });
//     //4. res.sendStatus(400);
//     //5. res.status(400).json({ success: false });
//     res.status(200).json({ success: true, msg: 'Show all hospitals' });
// });

// app.get('/api/v1/hospitals/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: `Show hospital ${req.params.id}` });
// });

// app.post('/api/v1/hospitals', (req, res) => {
//     res.status(200).json({ success: true, msg: 'Create new hospital' });
// });

// app.put('/api/v1/hospitals/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: `Update hospital ${req.params.id}` });
// });

// app.delete('/api/v1/hospitals/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: `Delete hospital ${req.params.id}` });
// });

app.use("/api/v1/hospitals", hospitals);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
