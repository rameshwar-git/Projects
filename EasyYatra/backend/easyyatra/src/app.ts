import express from 'express';
import { connectDB } from './config/db';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', userRoutes);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
