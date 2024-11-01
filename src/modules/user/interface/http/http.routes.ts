import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthService } from '../../services/auth.service';
import { AuthController } from '../controllers/auth.controller';

export function userRouter(): Router {
    const router = Router();
    const authService = container.resolve<AuthService>('AuthService');
    const authController = new AuthController(authService);

    router.post('/login', (req, res) => authController.login(req, res));
    router.post('/register', (req, res) => authController.register(req, res));

    return router;
}

