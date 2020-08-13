import React from 'react';
import '../assets/styles/App.scss';
import Logo from '../assets/static/logo-project.png';

const Header = () => (
  <header className='header'>
    <nav className='header--menu'>
      <ul className='header--menu__item'>
        <li className='header--item__list'><a href='/'>Inicio</a></li>
        <li className='header--item__list'><a href='/'>acerca</a></li>
        <li className='header--item__list'><a href='/'>portfolio</a></li>
        <li className='header--item__list'><a href='/'>contacto</a></li>
      </ul>
    </nav>
    <div>
      <div>
        <img className='header--logo' src={Logo} alt='' />
      </div>
      <p>
        Mira mis últimos diseños y projectos,
        Oh, por cierto, ¡Bienvenido!
      </p>
    </div>
  </header>
);

export default Header;
