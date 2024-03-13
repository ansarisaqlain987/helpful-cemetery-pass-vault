import pino from 'pino';

export const logger = pino({
    name: 'app-logger',
    timestamp: false,
});

