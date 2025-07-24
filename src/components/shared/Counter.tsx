import React, { useState } from 'react'

export const Counter = () => {
    const [angka, setAngka] = useState<number>(0);

    const increment = () => {
        setAngka(angka + 1)
    }

    const decrement = () => {
        setAngka(angka - 1)
    }

  return (
    <>
        <div className='font-bold'>COUNTER</div>
        <h1 className='text-9xl mx-10 my-10'>{angka}</h1>
        <div className='flex justify-center items-center gap-1'>
            <button
                className='w-10 h-10 flex items-center justify-center rounded-[5px] bg-green-500 text-white'
                onClick={increment}
            >
                +
            </button>
            <button
                className='w-10 h-10 flex items-center justify-center rounded-[5px] bg-red-500 text-white'
                onClick={decrement}
            >
                -
            </button>
        </div>
    </>
  )
}
