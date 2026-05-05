import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Logs from '../pages/Logs'
import Goals from '../pages/Goals'
import Sidebar from './Sidebar'

function AppContent() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </main>
    </div>
  )
}

export default AppContent