import React from 'react';
import SVGsAnimation from './SVGsAnimation';
import './Header.scss';
import Menu from './Menu';

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <Menu />
            <div className="content m-t-50 p-b-60">
                <h1>Váriáveis de Contrato do Construtor de Vendas</h1>
                <p>Encontre todas as váriáveis de contrato possível para o seu uso!</p>
            </div>
        </div>
        <SVGsAnimation />
    </div>
  )
}

export default Header