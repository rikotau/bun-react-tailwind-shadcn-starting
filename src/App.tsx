import "@/public/styles/globals.css";
import { Counter } from "./components/shared/Counter";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      {/* <div className="flex justify-center items-center gap-8 mb-8">
        <Counter />
      </div> */}

      <Counter />
    </div>
  );
}

export default App;
