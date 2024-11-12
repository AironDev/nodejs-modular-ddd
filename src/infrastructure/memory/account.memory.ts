import { UserRepository } from '../../domain/interfaces/repository.interface';
import { User } from '../../domain/models/user';

export class AuthRepositoryMemory implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const user = this.users.find(user => user.id === id);
    return user || null;
  }

  async findOne(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email);
    return user || null;
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async update(user: User): Promise<User> {
    const existingUser = await this.findById(user.id);
    if (existingUser) {
      Object.assign(existingUser, user);
      return existingUser;
    }
    throw new Error('User not found');
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
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
