const express = require('express');
const cors = require('cors');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', registerRoute);
app.use('/api', loginRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
