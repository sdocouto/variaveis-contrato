import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import VariaveisContrato from './Components/VariaveisContrato/VariaveisContrato'
import CondicionaisContrato from './Components/CondicionaisContrato/CondicionaisContrato';
import './App.scss';

const App = () => {

  return (
    <>
      <Header />
      <VariaveisContrato />
      <CondicionaisContrato />
      <Footer />
    </>
  )
}

export default App
