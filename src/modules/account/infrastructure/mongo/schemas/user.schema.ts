// infrastructure/schemas/user.schema.ts
import mongoose, { Document, Schema } from 'mongoose';
import { User } from '../../../domain/models/user';

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  toDomain(): User; // Add toDomain method
}

// Mongoose schema definition
const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

// Method to convert a Mongoose document to the User domain model
UserSchema.methods.toDomain = function (): User {
  return new User(this._id.toString(), this.email, this.name, this.password);
};

// Create the model
export const UserModel = mongoose.model<IUser>('User', UserSchema);




mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});