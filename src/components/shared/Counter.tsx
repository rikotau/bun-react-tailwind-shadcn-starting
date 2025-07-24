import React, { useState } from 'react'

export const Counter = ({
    count,
    onIncrement,
    onDecrement,
}: {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}) => {

  return (
    <>
        <div className='font-bold'>COUNTER</div>
        <h1 className='text-9xl mx-10 my-10'>{count}</h1>
        <div className='flex justify-center items-center gap-1'>
            <button
                className='w-10 h-10 flex items-center justify-center rounded-[5px] bg-green-500 text-white'
                onClick={onIncrement}
            >
                +
            </button>
            <button
                className='w-10 h-10 flex items-center justify-center rounded-[5px] bg-red-500 text-white'
                onClick={onDecrement}
            >
                -
            </button>
        </div>
    </>
  )
}
