import React from 'react'
import { Outlet } from 'react-router-dom'

const ExpenseTracker = () => {
  return (
    <div>
      <div>ExpenseTracker</div>

      {/* Header Component */}
      <div className='header__container'>
        Header Container
      </div>

      {/* Reports/Transactions/Settings Component */}
      <div className='outlet__container'>
        <Outlet />
      </div>

      {/* Navbar Component */}
      <div className='navbar__container'>
        NavBar Component
      </div>
    </div>
  )
}

export default ExpenseTracker