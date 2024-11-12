import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../domain/interfaces/repository.interface';
import { User } from '../../domain/models/user';

@injectable()
export class RegisterUserUseCase {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository
  ) {}

  async execute(email: string, password: string, name: string): Promise<User> {
    const user = new User(Date.now().toString(), email, name, password);


    const res = await this.userRepository.create(user);


    return user;
  }
}
