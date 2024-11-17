import { Sidebar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout