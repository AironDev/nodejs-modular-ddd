import { inject, injectable } from 'tsyringe';
import { RegisterUserUseCase } from './usecases/register-user.usecase';
import { LoginUserUseCase } from './usecases/login-user.usecase';
import { User } from '../domain/models/user';
import { UserLoginDTO, UserLoginResponseDTO } from '../domain/interfaces/dto.interface';

@injectable()
export class AuthService {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private loginUserUseCase: LoginUserUseCase
  ) {}

  async register(email: string, password: string, name: string): Promise<User> {
    return await this.registerUserUseCase.execute(email, password, name);
  }

  async login( {email, password} : UserLoginDTO): Promise<UserLoginResponseDTO | null> {
    return await this.loginUserUseCase.execute(email, password);
  }
}
