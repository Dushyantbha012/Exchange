import express from 'express';
import cors from 'cors';
import { depthRouter } from './routes/depth';
import { tradesRouter } from './routes/trades';
import { tickersRouter } from './routes/ticker';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/depth",depthRouter);
app.use("/api/trades",tradesRouter);
app.use("/api/tickers",tickersRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});