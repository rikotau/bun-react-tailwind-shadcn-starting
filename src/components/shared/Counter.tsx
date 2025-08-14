import { counterStore } from '@/store/counterStore'
import { useShallow } from 'zustand/react/shallow'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@/components/ui'

export const Counter = () => {
    const {count, increment, decrement, reset} = counterStore(
        useShallow((state) => ({
            count: state.count,
            increment: state.increment,
            decrement: state.decrement,
            reset: state.reset,
        }))
    )

  return (
    <Card>
      <CardHeader>
        <CardTitle>COUNTER</CardTitle>
        <CardDescription>Counter App using Zustand</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-1'>
        <div className='text-9xl m-10'>
          {count}
        </div>
        <div className='grid grid-cols-2 gap-1'>
          <Button className='text-white bg-green-500 hover:bg-green-500/90 dark:bg-green-700 dark:hover:bg-green-700/90' onClick={increment}>+</Button>
          <Button variant='destructive' onClick={decrement}>-</Button>
        </div>
        <div className='grid'>
          <Button variant='secondary' onClick={reset}>Reset</Button>
        </div>
      </CardContent>
    </Card>
  )
}
