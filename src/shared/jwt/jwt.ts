import * as jwt from 'jsonwebtoken';
import { config } from '../config';

class JWT {
  private static secret: string = config.jwt.secret;
  private static tokenLifetime: string = config.jwt.tokenLifetime;

  static generateToken(payload: object): {token: string, expiresIn: string} {
    if (!JWT.secret) {
      throw new Error('Secret key not set');
    }
    const token = jwt.sign(payload, JWT.secret, { expiresIn: JWT.tokenLifetime });
    return {token, expiresIn: JWT.tokenLifetime}

  }

  static verifyToken(token: string): object | string {
    if (!JWT.secret) {
      throw new Error('Secret key not set');
    }
    try {
      return jwt.verify(token, JWT.secret);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  static decodeToken(token: string): jwt.JwtPayload | null | string {
    return jwt.decode(token);
  }
}

export default JWT;