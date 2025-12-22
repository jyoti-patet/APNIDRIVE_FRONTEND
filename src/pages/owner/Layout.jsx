import React, { useEffect } from 'react'
import NavbarOwner from '../../components/owner/NavbarOwner'
import SideBar from '../../components/owner/SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

function Layout() {
  const { isOwner } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOwner) {
      navigate('/')
    }
  }, [isOwner, navigate])

  return (
    <div className='flex flex-col'>
      <NavbarOwner />
      <div className='flex'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
