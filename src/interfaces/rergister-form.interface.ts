import type { Gender, LearningPath } from '@/enum';

export interface RegisterFormValue {
    fullName: string;
    email: string;
    password: string;
    age: number;
    birthdate: Date;
    gender: Gender;
    learningPath: LearningPath[],
    notes?: string
}

export type RegisterFormProps = {
  onRegister: (data: RegisterFormValue) => void;
};