
import dotenv from 'dotenv';
dotenv.config();

export const config = {
    jwt: {
        tokenLifetime: <string>process.env.JWT_TOKEN_LIFE_TIME || '24h',
        secret: <string>process.env.JWT_SECRET,
    },

    aws: {
        secretAccessKey: <string>process.env.AWS_SECRET_KEY,
        accessKeyId: <string>process.env.AWS_ACCESS_KEY_ID,
        region: <string>process.env.AWS_REGION,
        s3BucketName: <string>process.env.AWS_S3_BUCKET
    },

    twilio: {
        accountSid: <string>process.env.TWILIO_ACCOUNT_SID,
        authToken: <string>process.env.TWILIO_AUTH_TOKEN,
        twilioPhoneNumber: <string>process.env.TWILIO_PHONE_NUMBER,
        verificationServiceSid: <string>process.env.TWILIO_VERIFICATION_SERVICE_SID
    },
};
