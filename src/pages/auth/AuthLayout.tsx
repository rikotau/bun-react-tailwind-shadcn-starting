import { Navbar } from "@/components/shared";

export function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <div>
      <Navbar/>
      <main className="flex-1 flex-col items-center justify-center p-8">
        { children }
      </main>
    </div>
  )
}
