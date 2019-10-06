/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import cors from 'cors';
import JSONvalidator from './helpers/validateJSON';
import AuthRoutes from './routes';

class App {
    public app: express.Application = express();

    public constructor() {
        this.app.use(cors());
        this.config();
        this.app.use(JSONvalidator.tryParseJSON);
        this.configureRoutes();
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private configureRoutes(): void {
        this.app.use('/api/v1', AuthRoutes);
    }
}

export default new App().app; // app will be used in the tests
