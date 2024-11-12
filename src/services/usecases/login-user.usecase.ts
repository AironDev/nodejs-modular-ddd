import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../domain/interfaces/repository.interface';
import { User } from '../../domain/models/user';
import { UserLoginResponseDTO } from '../../domain/interfaces/dto.interface';
import JWT from '../../shared/jwt/jwt';

@injectable()
export class LoginUserUseCase {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository
  ) {}

  async execute(email: string, password: string): Promise<UserLoginResponseDTO | null> {
    const user = await this.userRepository.findByEmail(email);
    if (user && user.password === password) {
      const {token, expiresIn} = JWT.generateToken({
        id: user.id,
        email: user.email,
        name: user.name
      })
      return {token, expiresIn, user};
    }
    return null;
  }
}
