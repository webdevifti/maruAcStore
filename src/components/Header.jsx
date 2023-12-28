import React from 'react'
import HeaderTop from './partials/HeaderTop';
import HeaderMenu from './partials/HeaderMenu';
import '../assets/styles/components/header.scss';

const Header = () => {
  return (

    <div className="header">
      <HeaderTop />
      <HeaderMenu />
    </div>
  )
}

export default Header