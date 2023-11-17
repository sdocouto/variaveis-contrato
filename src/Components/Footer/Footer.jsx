import React from 'react'
import LogoSvg from '../../Assets/SVG/logo-footer.svg'
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="col-lg-12 content">
            <a href="/home">
              <img src={LogoSvg} alt="" />
            </a>
            <p>@Copyrigth {new Date().getFullYear()} - CV CRM - A melhor solução para gestão comercial de sua Incorporadora</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer