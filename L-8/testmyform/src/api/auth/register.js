const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/auth/register', (req, res) => {
    const { login, email, password } = req.body;
    res.status(200).json({ login, email, password }); // Отправляем обратно данные
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
