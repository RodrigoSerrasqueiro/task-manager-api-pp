import app from './app';
import connectDB from './config/db';
import { env } from './config/env';

const PORT = env.PORT;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(`Failed to start the server: ${error.message}`);
  }
};

startServer();
