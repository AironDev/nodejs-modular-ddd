import { UserRepository } from '../../domain/interfaces/repository.interface';
import { User } from '../../domain/models/user';

export class AuthRepositoryMemory implements UserRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email);
    return user || null;
  }

  async save(user: User): Promise<User> {
    const existingUser = await this.findByEmail(user.email);

    if (existingUser) {
      existingUser.name = user.name;
      existingUser.password = user.password;
    } else {
      this.users.push(user);
    }
    
    return user;
  }
}
