import mongoose from 'mongoose';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/frrrr';

export async function connectMongoDB() {
  try {
    await mongoose.connect(mongoUri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('MongoDB (via Mongoose) connected');
  } catch (error) {
    console.error('Failed to connect to MongoDB via Mongoose:', error);
    throw error; // Ensure the error is thrown to stop further execution
  }
}
