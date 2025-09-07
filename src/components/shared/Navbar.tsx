// src/components/shared/Navbar.tsx
import { Link } from "@tanstack/react-router"
import { ButtonTheme } from "./ButtonTheme"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex gap-4">
        <Link 
          to="/login" 
          className="[&.active]:text-gray-500 hover:text-blue-500 transition"
        >
          Login
        </Link>
        <Link 
          to="/register" 
          className="[&.active]:text-gray-500 hover:text-blue-500 transition"
        >
          Register
        </Link>
        <ButtonTheme/>
      </div>
    </nav>
  )
}
