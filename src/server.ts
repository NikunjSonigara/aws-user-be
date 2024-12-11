import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import { initializeDatabase } from './db/migrations'; 
import { displayStartupScreen } from './utils/startupScreen';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      displayStartupScreen();
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();