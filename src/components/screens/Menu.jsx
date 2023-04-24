import React from 'react'

import icon from '../../assets/jsgram-icon.png'
import '../css/main.css'

const Menu = () => {

  return (
    <div>
      <nav className='conteiner_nav_flex'>
        <img className='img_icon' src={icon} alt='icone do jsgram'/>
        <ul className='conteiner_ul_flex'>
          <li className='item_li'><a href="/feed">Página Incial</a></li>
          <li className='item_li'><a href="/search">Pesquisa</a></li>
          <li className='item_li'><a href="/profile">Meu Perfil</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu