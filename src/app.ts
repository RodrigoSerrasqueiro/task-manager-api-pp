import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Request-with', 'Content-Type', 'Accept']
  })
);

app.use(express.json());
app.use('/api', routes);

export default app;
