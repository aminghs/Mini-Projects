import express from 'express';
import bodyParsel from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParsel.json());

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
