import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoSvg from '../../Assets/SVG/logo.svg'
import './Menu.scss'

const Menu = () => {
  return (
    <div className="topo">
        <NavLink to="/" end className="logo">
            <img src={LogoSvg} alt="" />
        </NavLink>
        <ul className="menu">
            <li>
                <NavLink to="/" end>
                    Váriáveis de contrato
                </NavLink>
            </li>
            <li>
                <NavLink to="condicionaiscontrato">
                    Entenda as condicionais dos contratos
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Menu