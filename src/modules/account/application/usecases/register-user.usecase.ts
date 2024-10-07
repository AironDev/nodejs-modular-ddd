import { inject, injectable } from 'tsyringe';
import { AccountRepository } from '../../domain/interfaces/account_repository.interface';
import { User } from '../../domain/models/user';

@injectable()
export class RegisterUserUseCase {
  constructor(
    @inject('AccountRepository') private accountRepository: AccountRepository
  ) {}

  async execute(email: string, password: string, name: string): Promise<User> {
    const user = new User(Date.now().toString(), email, name, password);


    const res = await this.accountRepository.save(user);

    // console.log(res)

    return user;
  }
}
