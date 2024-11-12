import { container } from 'tsyringe';
import { AuthService } from '../modules/user/services/auth.service';
import { UserRepository } from '../modules/user/domain/interfaces/repository.interface';
import { MongoAccountRepository } from '../modules/user/infrastructure/mongo/repositories/account.mongo';
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
