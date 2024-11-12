import { User } from '../models/user';

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findOne(email: string): Promise<User | null>;
  create(user: User): Promise<User>; 
  update(user: User): Promise<User>; 
  delete(id: string): Promise<void>;

}
