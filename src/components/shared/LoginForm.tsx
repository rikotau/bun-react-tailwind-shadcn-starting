import type { LoginFormValues } from '@/interfaces'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { z } from 'zod';
import {
    Card, CardContent, CardFooter, CardHeader, CardTitle,
    Button,
    Label,
    Input,
    Checkbox,
} from '@/components/ui'
import { useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '@/store/useAuthStore';

const defaultValues: LoginFormValues = {
    email: '',
    password: '',
    rememberMe: false
}

const loginSchema = z.object({
    email: z.email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(24, { message: 'Password must be at most 24 characters long' })
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/, { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' }),
    rememberMe: z.boolean(),
})

export const LoginForm = () => {
    
const navigate = useNavigate();
const { login } = useAuthStore();

    const onSubmit = async ({ value }: { value: LoginFormValues }) => {
        try {
        const res = await login({ value });
        toast.success(res.message);
        navigate({ to: '/dashboard' });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Login failed. Please try again.';
            toast.error(message);
            console.error(error);
        }
};

    const { Field, handleSubmit } = useForm({
        defaultValues,
        validators: {
            onSubmit: loginSchema,
        },
        onSubmit,
    })

  return (
        <form
            onSubmit={(e) => {
                // Prevent browser from submitting the form and refreshing the page
                e.preventDefault();
                
                // Run form validation and submission logic
                handleSubmit(e);
            }}
        >
        <Card>
            <CardHeader>
                <CardTitle>LOGIN FORM</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4'>
                <Field name='email'>
                    {({ state, handleChange, name }) => (
                        <div className='grid gap-2'>
                            <Label htmlFor={name} className='text-left'>Email</Label>
                            <Input
                                type='email'
                                placeholder='Input your email'
                                id={name}
                                value={state.value}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            {state.meta.errors && (
                                <p className='text-red-500 text-xs'>
                                    {Array.isArray(state.meta.errors)
                                        ? state.meta.errors
                                        .map((err) =>
                                            typeof err === 'string' ? err : err?.message || 'Unknown error')
                                        .join(', ')
                                        : String(state.meta.errors)
                                    }
                                </p>
                            )}
                        </div>
                    )}
                </Field>
                <Field name='password'>
                    {({ state, handleChange, name }) => (
                        <div className='grid gap-2'>
                            <Label htmlFor={name} className='text-left'>Password</Label>
                            <Input
                                type='password'
                                placeholder='Input your password'
                                id={name}
                                value={state.value}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            {state.meta.errors && (
                                <p className='text-red-500 text-xs'>
                                    {Array.isArray(state.meta.errors)
                                        ? state.meta.errors
                                        .map((err) =>
                                            typeof err === 'string' ? err : err?.message || 'Unknown error')
                                        .join(', ')
                                        : String(state.meta.errors)
                                    }
                                </p>
                            )}
                        </div>
                    )}
                </Field>
                <Field name='rememberMe'>
                    {({ state, handleChange, name }) => (
                        <div className='grid gap-2'>
                            <div key={name} className='flex gap-4 items-center'>
                                <Checkbox
                                    id={name}
                                    checked={state.value}
                                    onCheckedChange={(checked) => {
                                        handleChange(checked === true)
                                    }}
                                />
                                <Label htmlFor={name}>Remember Me</Label>
                            </div>
                        </div>
                    )}
                </Field>
            </CardContent>
            <CardFooter>
                <Button type='submit' className='w-full'>Submit</Button>
            </CardFooter>
        </Card>
      </form>
  );
}
