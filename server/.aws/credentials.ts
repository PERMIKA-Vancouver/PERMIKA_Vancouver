import { S3Client } from '@aws-sdk/client-s3';
import { awsConfig } from './config';

export const s3Client = new S3Client({
    region: awsConfig.region,
    credentials: {
        accessKeyId: awsConfig.accessKeyId!,
        secretAccessKey: awsConfig.secretAccessKey!
    },
});

