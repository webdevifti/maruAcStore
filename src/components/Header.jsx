import React from 'react'
import HeaderTop from './partials/HeaderTop';
import HeaderMenu from './partials/HeaderMenu';
import '../assets/styles/components/header.scss';

const Header = () => {
  return (
    <div>
      <div className="header">
       <HeaderTop />
       <HeaderMenu />
      </div>
    </div>
  )
}

export default Header