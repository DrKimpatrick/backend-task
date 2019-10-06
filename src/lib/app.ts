/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import cors from 'cors';
import JSONvalidator from './helpers/validateJSON';
import AuthRoutes from './routes';
import morgan from 'morgan';
import winston from './helpers/winston';

class App {
    public app: express.Application = express();

    public constructor() {
        this.app.use(cors());
        this.config();
        this.app.use(morgan('combined', { stream: winston.stream }));
        this.app.use(JSONvalidator.tryParseJSON);
        this.configureRoutes();
    }
    /**
        create application/json parser &&
        create application/x-www-form-urlencoded parser
     */
    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
    /**
        Add API routes
     */
    private configureRoutes(): void {
        this.app.use('/api/v1', AuthRoutes);
    }
}

export default new App().app; // app will be used in the tests
