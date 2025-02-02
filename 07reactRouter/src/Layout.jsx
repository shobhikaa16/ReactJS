import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// wherever we use router wha vo part same rahega but uski ander ki cheeze hum change kar skte hai

function Layout() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout