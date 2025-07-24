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

  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <Counter
        count={angka}
        onIncrement={increment}
        onDecrement={decrement}
      />
    </div>
  );
}

export default App;
