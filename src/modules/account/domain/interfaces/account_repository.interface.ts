// domain/interfaces/account_repository.interface.ts
import { User } from '../models/user';

export interface AccountRepository {
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<User>; 
}
