import * as alias from 'easy-alias/boot';
import { createServer } from 'http';
import { connectDB } from './database/mongoose.db';
import { routeLoader } from './routes';
import { appConfig } from '@config/app.config';
import { app } from './express';

export const mongooseConnection = connectDB();

export const application = routeLoader(app);

const http = createServer(application);

http.listen(process.env.PORT || appConfig.PORT || 8080, () => {
    console.log(`Server listening on port ${process.env.PORT || appConfig.PORT || 8080} successfully`);
});