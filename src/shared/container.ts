import { container } from 'tsyringe';
import { AuthService } from '../services/auth.service';
import { UserRepository } from '../domain/interfaces/repository.interface';
import { MongoAccountRepository } from '../infrastructure/mongo/repositories/account.mongo';
import { connectMongoDB } from './config/mongo.config';

export async function setupContainer() {
    // Connect to MongoDB via Mongoose
    await connectMongoDB();

    // Register the UserRepository implementation
    container.register<UserRepository>('UserRepository', {
        useClass: MongoAccountRepository,
    });

    // Register the AuthService service
    container.register<AuthService>('AuthService', {
        useClass: AuthService,
    });
}
