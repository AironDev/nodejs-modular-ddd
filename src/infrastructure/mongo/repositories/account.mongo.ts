// infrastructure/repositories/account.mongo.ts
import { injectable, inject } from 'tsyringe';
import { UserModel } from '../schemas/user.schema';
import { UserRepository } from '../../../domain/interfaces/repository.interface';
import { User } from '../../../domain/models/user';

@injectable()
export class MongoAccountRepository implements UserRepository {
  
  async create(user: User): Promise<User> {
    const newUser = new UserModel(user); 

    const savedUser = await newUser.save(); // Save to the database
    return savedUser as User; 
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await UserModel.findOne({ email }); // Use Mongoose to find the user
    return result ? result as User : null; 
  }

  async findById(email: string): Promise<User | null> {
    const result = await UserModel.findOne({ email }); 
    return result ? result as User : null; 
  }


  async findOne(email: string): Promise<User | null> {
    const result = await UserModel.findOne({ email }); 
    return result ? result as User : null; 
  }

  async update(user: User): Promise<User> {
    const newUser = new UserModel(user); 
    const savedUser = await newUser.save(); 
    return savedUser as User; 
  }


  async delete(id: string): Promise<void> {
   
  }
}
