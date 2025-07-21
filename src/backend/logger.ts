import winston from 'winston';
import LokiTransport from 'winston-loki';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new LokiTransport({
      host: 'http://loki:3100'
    })
  ],
});

export default logger;
