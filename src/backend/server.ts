import express from 'express';
import client from 'prom-client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

import logger from './logger';

app.get('/health', (req, res) => {
  logger.info('Health check requested');
  res.status(200).send('OK');
});

app.get('/metrics', async (req, res) => {
  logger.info('Metrics requested');
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => {
  logger.info(`Backend server is running on port ${port}`);
});
