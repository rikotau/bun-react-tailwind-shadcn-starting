import type { RegisterFormValue, RegisterFormProps } from '@/interfaces'
import { Gender, LearningPath } from '@/enum'
import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import {
    Card, CardContent, CardFooter, CardHeader, CardTitle,
    Button,
    Label,
    Input,
    Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
    Checkbox,
    Textarea,
} from '@/components/ui'

// Converts Date → 'YYYY-MM-DD' (UTC)
// Example: "2025-12-31T00:00:00.000Z"
// 1970-01-01 = Unix time starts here
// Split at 'T' to remove the time (HH:mm:ss) — less noise, same data
const formatDateInput = (date: Date | string) => {
  if (date instanceof Date && !isNaN(date.getTime())) {
    return date.toISOString().split('T')[0];
  }
  return '';
}

export const RegistrationForm: React.FC<RegisterFormProps> = ({ onRegister }) => {

    const defaultValues: RegisterFormValue = {
        fullName: '',
        email: '',
        password: '',
        age: 0,
        birthdate: new Date(),
        gender: Gender.Male,
        learningPath: [LearningPath.Frontend],
        notes:'',
    }

    const { Field, handleSubmit, reset } = useForm({
        defaultValues,
        onSubmit: async ({ value }) => {
            console.log(value)
            toast.success('Registration successful!')
            onRegister(value)
            reset()
        },
    })

    const [addNote, setAddNote] = useState(false)

    const focusHandler = (label: string) => (
        toast(`Input focused on: ${label}`)
    )

    const blurHandler = () => (
        toast('Input blurred')
    )

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
                <Field name='fullName'>
                    {({ state, handleChange, name }) => (
                        <div className='grid gap-2'>
                            <Label htmlFor={name} className='text-left'>Full Name</Label>
                            <Input
                                type='text'
                                placeholder='Input your name'
                                id={name}
                                value={state.value}
                                onChange={(e) => handleChange(e.target.value)}
                                onFocus={() => focusHandler('Full Name')}
                                onBlur={blurHandler}
                            />
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
                                onFocus={() => focusHandler('Email')}
                                onBlur={blurHandler}
                            />
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
                                onFocus={() => focusHandler('Password')}
                                onBlur={blurHandler}
                            />
                        </div>
                    )}
                </Field>
                <Field name='age'>
                    {({ state, handleChange, name }) => (
                        <div className='grid gap-2 mt-5'>
                            <Label htmlFor={name} className='text-left'>Age</Label>
                            <Input
                                type='number'
                                id={name}
                                value={state.value}
                                onChange={(e) => handleChange(Number(e.target.value))}
                                onFocus={() => focusHandler('Age')}
                                onBlur={blurHandler}
                            />
                        </div>
                    )}
                </Field>
                <Field name='birthdate'>
                    {({ state, handleChange, name }) => (
                        
                        <div className='grid gap-2'>

                            <Label htmlFor={name} className='text-left'>Birthdate</Label>
                            <Input
                                type='date'
                                id={name}
                                value={formatDateInput(state.value)}
                                onChange={(e) => handleChange(new Date(e.target.value ? new Date(e.target.value): null))}
                                onFocus={() => focusHandler('Birthdate')}
                                onBlur={blurHandler}
                            />
                        </div>
                    )}
                </Field>
                <Field name='gender'>
                    {({ state, handleChange, name }) => (
                        <div className='grid gap-2'>
                            <Label htmlFor={name} className='text-left'>Gender</Label>
                            <Select
                                defaultValue={state.value}
                                onValueChange={(value) => handleChange(value as Gender)}
                                >
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Select a gender' />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.values(Gender).map((gender) => (
                                        <SelectItem key={gender} value={gender}>
                                            {gender}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                </Field>
                <Field name='learningPath'>
                    {({ state, handleChange, name }) => (
                        <div className='grid gap-2 mt-5'>
                            <Label htmlFor={name} className='text-left'>Learning Path</Label>
                            {Object.values(LearningPath).map((path) => (
                                <div key={path} className='flex gap-4 items-center'>
                                    <Checkbox
                                        id={path}
                                        checked={state.value?.includes(path)}
                                        onCheckedChange={(checked) => {
                                            handleChange(
                                                checked
                                                ? [...state.value, path] // add to array
                                                : state.value.filter((p) => p !== path) // remove from array
                                            )
                                        }}/>
                                    <Label htmlFor={path}>{path}</Label>
                                </div>
                            ))}
                        </div>
                    )}
                </Field>
                <div className='flex gap-2 mt-5'>
                    <Checkbox
                        id='addNote'
                        checked={addNote}
                        onCheckedChange={(checked) => setAddNote(!!checked)}
                    />
                    <Label>Add Note</Label>
                </div>
                {addNote && (
                    <Field name='notes'>
                        {({ state, handleChange, name }) => (
                            <div className='grid gap-4'>
                                <Label htmlFor={name} className='text-left'>Notes</Label>
                                <Textarea
                                    placeholder='Type your notes here.'
                                    id={name}
                                    value={state.value}
                                    onChange={(e) => handleChange(e.target.value)}
                                onFocus={() => focusHandler('Notes')}
                                    onBlur={blurHandler}
                                />
                            </div>
                        )}
                    </Field>    
                )}
            </CardContent>
            <CardFooter>
                <Button type='submit' className='w-full'>Submit</Button>
            </CardFooter>
        </Card>
      </form>
  );
}
