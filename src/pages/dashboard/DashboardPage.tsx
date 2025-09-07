import { ButtonTheme } from "@/components/shared"
import { UsersTable } from "@/components/shared/usersTable/UsersTable"
import { Button } from "@/components/ui"
import { useAuthStore } from "@/store"
import { useNavigate } from "@tanstack/react-router"
import { toast } from "sonner"

export const DashboardPage = () => {
  const { logout } = useAuthStore()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    toast.warning('You have been logged out')
    navigate({ to: '/login' })
  }

  
    // const { name, page, limit, update } = useUsersSearch()
    // const { users, isLoading, totalPages } = useUsers({ name, page, limit })

    const users = null
    const isLoading = true
    const page = 1
    const totalPages = 10
    const limit = 10

    console.log('rendered')

  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <div className="flex gap-4">
          <Button variant="outline"onClick={handleLogout}>Logout</Button>
          <ButtonTheme/>
        </div>
      </nav>
      <main>
        <UsersTable 
          users={users}
          isLoading={isLoading}
          page={page}
          totalPages={totalPages}
          setPage={(newPage) => {
            console.log("Change to page:", newPage)
            // TODO: update table hook
          }}
          limit={limit}
        />
      </main>
    </>
  )
}
