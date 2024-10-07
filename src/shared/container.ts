import { container } from 'tsyringe';
import { AuthApplication } from '../modules/account/application/auth.application';
import { AccountRepository } from '../modules/account/domain/interfaces/account_repository.interface';
import { MongoAccountRepository } from '../modules/account/infrastructure/mongo/repositories/account.mongo';
import { connectMongoDB } from './config/mongo.config';

export async function setupContainer() {
    // Connect to MongoDB via Mongoose
    await connectMongoDB();

    // Register the AccountRepository implementation
    container.register<AccountRepository>('AccountRepository', {
        useClass: MongoAccountRepository,
    });

    // Register the AuthApplication service
    container.register<AuthApplication>('AuthApplication', {
        useClass: AuthApplication,
    });
}
