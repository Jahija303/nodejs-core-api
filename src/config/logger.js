import winston from 'winston';
import expressWinston from 'express-winston';
import { PapertrailConnection, PapertrailTransport } from 'winston-papertrail';

const papertrailConnection = new PapertrailConnection({
    host: 'logs3.papertrailapp.com',
    port: 45471,
    colorize: true,
})

export default expressWinston.logger({
    transports: [ new PapertrailTransport(papertrailConnection)],
    meta: false,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    msg: `{{res.statusCode}} - {{req.method}} - {{res.responseTime}}ms - {{req.url}} - {{req.headers['user-agent']}}`, 
    expressFormat: false,
    colorize: true
});