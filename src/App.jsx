import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import VariaveisContrato from './Components/VariaveisContrato/VariaveisContrato'
import CondicionaisContrato from './Components/CondicionaisContrato/CondicionaisContrato';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/variaveis-contrato' element={<VariaveisContrato />} />
        <Route path='/variaveis-contrato/condicionaiscontrato' element={<CondicionaisContrato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
