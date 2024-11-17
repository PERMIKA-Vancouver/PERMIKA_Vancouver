import * as dotenv from 'dotenv';

dotenv.config();

export const awsConfig = {
    region: process.env.AWS_REGION, // Default region if not provided
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

export const appConfig = {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || 'development',
};

