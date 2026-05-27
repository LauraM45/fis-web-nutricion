import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'

function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <Sidebar />

      <div className="md:ml-[260px]">
        <Topbar />

        <main className="px-4 pb-12 pt-8 md:px-8 md:pt-24">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout