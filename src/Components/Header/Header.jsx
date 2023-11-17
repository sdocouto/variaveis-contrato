import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="topo">
                <a href="/home" className="logo">
                    <img src="assets/img/logo.svg" alt="" />
                </a>
                <ul className="menu">
                    <li>
                        <a href="/home">Váriáveis de contrato</a>
                    </li>
                    <li>
                        <a href="/entenda-as-condicoes-dos-contratos">Entenda as condicionais dos contratos</a>
                    </li>
                </ul>
            </div>
            <div className="content">
            <h1>Váriáveis de Contrato do Construtor de Vendas</h1>
            <p>Encontre todas as váriáveis de contrato possível para o seu uso!</p>
            </div>
        </div>
    </div>
  )
}

export default Header