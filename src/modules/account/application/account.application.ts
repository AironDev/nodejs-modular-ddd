import { inject, injectable } from 'tsyringe';
import { RegisterUserUseCase } from './usecases/register-user.usecase';
import { LoginUserUseCase } from './usecases/login-user.usecase';
import { User } from '../domain/models/user';

@injectable()
export class AuthApplication {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private loginUserUseCase: LoginUserUseCase
  ) {}

  async register(email: string, password: string, name: string): Promise<User> {
    return await this.registerUserUseCase.execute(email, password, name);
  }

  async login(email: string, password: string): Promise<User | null> {
    return await this.loginUserUseCase.execute(email, password);
  }
}
