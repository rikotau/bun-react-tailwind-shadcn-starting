import "@/public/styles/globals.css";
import type { PropsWithChildren } from "react";

export function App({ children }: Readonly<PropsWithChildren>) {

  return (
     <main className="min-h-screen w-full">
      { children }
     </main>
  );
}

export default App;
