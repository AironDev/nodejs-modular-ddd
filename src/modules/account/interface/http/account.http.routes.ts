import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthApplication } from '../../application/auth.application';
import { AuthController } from '../controllers/auth.controller';

export function accountRouter(): Router {
    const router = Router();
    const authApplication = container.resolve<AuthApplication>('AuthApplication');
    const authController = new AuthController(authApplication);

    router.post('/login', (req, res) => authController.login(req, res));
    router.post('/register', (req, res) => authController.register(req, res));

    return router;
}

