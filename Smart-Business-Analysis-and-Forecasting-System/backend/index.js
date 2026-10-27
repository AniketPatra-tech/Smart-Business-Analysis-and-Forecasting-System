
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Server is running smoothly!');
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Backend server listening on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to start backend:', error.message);
    process.exit(1);
});
