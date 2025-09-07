import type { RegisterFormValues } from '@/interfaces'
import { RoleEnum } from '@/enum'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import {
    Card, CardContent, CardFooter, CardHeader, CardTitle,
    Button,
    Label,
    Input,
    Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '@/components/ui'
import { useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/store'
import { z } from 'zod';

const defaultValues: RegisterFormValues = {
    name: '',
    email: '',
    password: '',
    role: '' as RoleEnum,
}

const registerSchema = z.object({
    name: z.string(),
    email: z.email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(24, { message: 'Password must be at most 24 characters long' })
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/, { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' }),
    role: z.enum([RoleEnum.Admin, RoleEnum.User]),
})

export const RegistrationForm = () => {
    
const navigate = useNavigate();
const { register } = useAuthStore();

    const onSubmit = async ({ value }: { value: RegisterFormValues }) => {
        try {
        const res = await register({ value });
        toast.success(res.message);
        navigate({ to: '/login' });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Registration failed. Please try again.';
            toast.error(message);
            console.error(error);
        }
};

    const { Field, handleSubmit } = useForm({
        defaultValues,
        validators: {
            onSubmit: registerSchema,
        },
        onSubmit,
    })

  return (
        <form
            onSubmit={(e) => {
                // Prevent browser from submitting the form and refreshing the page
                e.preventDefault();

                // Stop the event from bubbling up to parent elements
                e.stopPropagation();
                
                // Run form validation and submission logic
                handleSubmit(e);
            }}
        >
        <Card>
            <CardHeader>
                <CardTitle>REGISTER FORM</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4'>
                <Field name='name'>
                    {({ state, handleChange, name }) => (
                        <div className='grid gap-2'>
                            <Label htmlFor={name} className='text-left'>Name</Label>
                            <Input
                                type='text'
                                placeholder='Input your name'
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
                <Field name='role'>
                    {({ state, handleChange, name }) => (
                        <div className='grid gap-2'>
                            <Label htmlFor={name} className='text-left'>Role</Label>
                            <Select
                                defaultValue={state.value}
                                onValueChange={(value) => handleChange(value as RoleEnum)}
                                >
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Select a role' />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.values(RoleEnum).map((role) => (
                                        <SelectItem key={role} value={role}>
                                            {role}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
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
            </CardContent>
            <CardFooter>
                <Button type='submit' className='w-full'>Submit</Button>
            </CardFooter>
        </Card>
      </form>
  );
}
