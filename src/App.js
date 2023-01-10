import React from 'react'
import FixedNavbar from './components/navbar-fixed/FixedNavbar'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {

  return (
    <>
      <Header/>
      <Sidebar />
      <FixedNavbar />
    </>
  )
}

export default App
