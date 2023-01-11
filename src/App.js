import React from 'react'
import FixedNavbar from './components/navbar-fixed/FixedNavbar'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Kombo from './components/kombo/Kombo'
import Pizza from './components/pizza/Pizza'

const App = () => {

  return (
    <>
      <Header/>
      <Sidebar />
      <FixedNavbar />
      <Kombo />
      <Pizza />
    </>
  )
}

export default App
