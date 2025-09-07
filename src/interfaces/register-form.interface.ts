import type { GenderEnum, RoleEnum } from '@/enum';

export interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    role: RoleEnum;
}

export interface RegisterResponse {
  statusCode: number,  
  message: string,
  timestamp: string,
  data: {
    user: {
      id: string,
      name: string,
      email: string,
      role: RoleEnum,
      gender: GenderEnum,
      age: number,
      bio: string,
      photo: string
    }
  };
}