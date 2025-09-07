import type { RoleEnum } from '@/enum';
import type { LoginFormValues, LoginResponse  } from './';

export interface AuthUser{
  id: string;
  email: string;
  role: RoleEnum;
}

export interface AuthState {
    user: AuthUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    setLoading: (loading: boolean) => void;    
    login: ({value}: {value: LoginFormValues}) => Promise<LoginResponse>;
    checkAuth: () => Promise<void>;
    logout: () => void;    
}

export interface AuthMe{
      statusCode: number,  
      message: string,
      timestamp: string,
      data: {
          id: string,
          email: string,
          role: RoleEnum
      };
}