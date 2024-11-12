import { User } from "../models/user";

export interface UserLoginResponseDTO {
    token: string;
    expiresIn: string;
    user: User;
  }

  export interface UserRegisterDTO {
    name: string;
    email: string;
    password: string;
  }

  export interface UserLoginDTO {
    email: string;
    password: string;
  }