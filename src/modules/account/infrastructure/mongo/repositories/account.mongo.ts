// infrastructure/repositories/account.mongo.ts
import { injectable, inject } from 'tsyringe';
import { UserModel } from '../schemas/user.schema';
import { AccountRepository } from '../../../domain/interfaces/account_repository.interface';
import { User } from '../../../domain/models/user';

@injectable()
export class MongoAccountRepository implements AccountRepository {
  async save(user: User): Promise<User> {
    const newUser = new UserModel(user); // Create a new instance of the Mongoose model

    const savedUser = await newUser.save(); // Save to the database
    return savedUser as User; // Convert to User domain model before returning
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await UserModel.findOne({ email }); // Use Mongoose to find the user

    return result ? result as User : null; // Convert to User domain model if found
  }
}
