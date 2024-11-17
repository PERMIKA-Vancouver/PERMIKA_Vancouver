import { ListBucketsCommand, PutObjectCommand, S3Client, S3ServiceException } from '@aws-sdk/client-s3';
import { s3Client } from '../../.aws/credentials'
import { Images, Event } from '../../models/merchandise/eventPicturesModel';
import { Request, Response } from 'express';
// import { readFile } from "node:fs/promises";
// import { List } from 'aws-sdk/lib/model';
import { Json } from 'aws-sdk/clients/robomaker';

const s3BucketName = process.env.S3_BUCKET_NAME
// const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY


export const getImages = async (req: Request, res: Response) => {
    let errorMsg: string = '';
    try {
        const { id , name, mimeType } = req.params;
        console.log(req.params)

        return res.status(200).json({ data: 'ok' });
    } catch (err) {
        if (typeof err === 'string') {
            errorMsg == err;
        } else if (err instanceof Error) {
            errorMsg = err.message;
        }
    }
    console.log(errorMsg);
    return res.status(500).send({ message: errorMsg });
};

// Function to create an instance of ImagesModel
const createImagesModel = (term: string, events: Event[]): Images => {
    return {
        term,
        events,
    };
};


export const uploadImagesToS3 = async ( s3Client: S3Client, result: Json ) => {
    const command = new PutObjectCommand({
      Bucket: s3BucketName,
      Key: secretAccessKey,
      Body: result,
    });
  
    try {
      const response = await s3Client.send(command);
      console.log(response);
    } catch (caught) {
      if (
        caught instanceof S3ServiceException &&
        caught.name === "EntityTooLarge"
      ) {
        console.error(
          `Error from S3 while uploading object to ${s3BucketName}. \
  The object was too large. To upload objects larger than 5GB, use the S3 console (160GB max) \
  or the multipart upload API (5TB max).`,
        );
      } else if (caught instanceof S3ServiceException) {
        console.error(
          `Error from S3 while uploading object to ${s3BucketName}.  ${caught.name}: ${caught.message}`,
        );
      } else {
        throw caught;
      }
    }
  };
