import { Request, Response } from 'express';
import { AuthService } from '../../services/auth.service';
import { UserLoginDTO } from '../../domain/interfaces/dto.interface';

export class AuthController {
    constructor(private authService: AuthService) {}

    async login(req: Request, res: Response): Promise<Response | any> {
        try {
            const { email, password } = req.body;
            const result = await this.authService.login({email, password});

            if (!result) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            return res.status(200).json(result);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json({ message: `Internal server error: ${error.message}`, error });
        }
    }

    async register(req: Request, res: Response): Promise<Response | any> {
        try {
            const { email, password, name } = req.body;
            const result = await this.authService.register(email, password, name);

            if (!result) {
                return res.status(400).json({ message: 'Registration failed' });
            }

            return res.status(201).json(result);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error', error });
        }
    }
}
