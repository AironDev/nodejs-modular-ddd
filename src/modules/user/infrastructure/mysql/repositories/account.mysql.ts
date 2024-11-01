// infrastructure/repositories/account.mysql.ts
import { Connection } from 'mysql2/promise';
import { UserRepository } from '../../../domain/interfaces/repository.interface';
import { User } from '../../../domain/models/user';
import { injectable, inject } from 'tsyringe';

@injectable()
export class MysqlAccountRepository implements UserRepository {
  constructor(@inject('MysqlConnection') private mysqlConnection: Connection) {}

  async save(user: User): Promise<User> {
    // Execute the query to insert the user into the database
    const [result] = await this.mysqlConnection.execute(
      'INSERT INTO users (email, name, password) VALUES (?, ?, ?)',
      [user.email, user.name, user.password]
    );


    const insertId = (result as any).insertId; 

    // Return the user with the inserted ID
    return new User(insertId.toString(), user.email, user.name, user.password);
  }

  async findByEmail(email: string): Promise<User | null> {
    // Execute the query to find the user by email
    const [rows] = await this.mysqlConnection.execute(
      'SELECT id, email, name, password FROM users WHERE email = ?',
      [email]
    );

    // Ensure rows is an array of users, if not empty, map the first result to a User object
    if ((rows as any[]).length > 0) {
      const row = (rows as any[])[0];
      return new User(row.id.toString(), row.email, row.name, row.password);
    }
    
    // If no user is found, return null
    return null;
  }
}
