"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const DashboardPage = () => {
    const session = useSession()
    if (!session.data?.user) redirect("/")
  return (
    <div>
      Dashboard
    </div>
  )
}

export default DashboardPage
