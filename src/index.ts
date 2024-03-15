import dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server launched on port ${PORT} 🚀`);
});