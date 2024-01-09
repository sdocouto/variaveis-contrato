import React from 'react'
import './MenuMobile.scss'
import { NavLink } from 'react-router-dom'
import MenuSvg from '../../Assets/SVG/menu.svg'
import TimesSvg from '../../Assets/SVG/times.svg'

const MenuMobile = () => {

    const [isOpenMenuMobile, setIsOpenMenuMobile] = React.useState(false);

    function handleMenuMobile(){
        setIsOpenMenuMobile(!isOpenMenuMobile);
    }

    return (
        <>
            <button className="btnMenuMobile" onClick={handleMenuMobile}>
                <img src={MenuSvg} alt="" />
            </button>
            {isOpenMenuMobile &&
                <div className="menu-mobile">
                    <button className='btn-close' onClick={handleMenuMobile}>
                        <img src={TimesSvg} alt="" />
                    </button>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={handleMenuMobile} end>
                                Váriáveis de contrato
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="condicionaiscontrato" onClick={handleMenuMobile}>
                                Entenda as condicionais dos contratos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            }
        </>
    )
}

export default MenuMobile