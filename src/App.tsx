import "@/public/styles/globals.css";
import { Counter } from "./components/shared/Counter";
import { useState } from "react";

export function App() {
    const [angka, setAngka] = useState<number>(0);

    const increment = () => {
        setAngka(angka + 1)
    }

    const decrement = () => {
        setAngka(angka - 1)
    }

    const onReset = () => {
      setAngka(0)
    }

  return (
    <div className="text-center">
      <Counter
        count={angka}
        onIncrement={increment}
        onDecrement={decrement}
      />
      <button
        className='w-20 h-10 items-center justify-center rounded-[5px] bg-blue-500 text-white'
        onClick={onReset}
      >
        RESET
      </button>
    </div>
  );
}

export default App;
