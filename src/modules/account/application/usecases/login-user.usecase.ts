import { inject, injectable } from 'tsyringe';
import { AccountRepository } from '../../domain/interfaces/account_repository.interface';
import { User } from '../../domain/models/user';

@injectable()
export class LoginUserUseCase {
  constructor(
    @inject('AccountRepository') private accountRepository: AccountRepository
  ) {}

  async execute(email: string, password: string): Promise<User | null> {
    const user = await this.accountRepository.findByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
