import React from 'react'
import AdminHeader from './header'
import AdminFooter from './footer'
import AdminSidebar from './sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <main className='bg-[#f6f9ff]'>
        <AdminHeader/>
        <div className='flex'>
        <AdminSidebar/>
        <div className='content w-4/5'>
            <Outlet/>
        </div>
        </div>
        <AdminFooter/>
    </main>
  )
}

export default AdminLayout