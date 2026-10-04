"use client"
import { useAuth } from '@/context/AuthContext'
import DashboardPanel from './DashboardPanel'

export default function DashboardPage() {
  const { user } = useAuth()
  return (
    <div className="p-6">
      <h1>Dashboard</h1>
      <DashboardPanel user={user} />
    </div>
  )
}
