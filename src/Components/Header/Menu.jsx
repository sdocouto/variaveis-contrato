import React from 'react'
import LogoSvg from '../../Assets/SVG/logo.svg'
import './Menu.scss'

const Menu = () => {
  return (
    <div className="topo">
        <a href="/home" className="logo">
            <img src={LogoSvg} alt="" />
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
  )
}

export default Menu