import React from 'react'

import '../css/main.css'

import Post from '../post/Post'
const UserProfile = ({ myUser }) => {

  return (
    <section id='profile'>
      {
        myUser && <div className='flex_column'>
          <h1 className='title_profile'>Perfil</h1>
          <div className='profile_conteiner'>
            <img className='profile_img_perfil' src={myUser.fotoperfil} alt="Foto de perfil" />
          </div>
          <span className='profile_name'>{myUser.nome}</span>
          <Post screen={"postProfile"} userId={myUser.codigo} />
        </div>
      }
    </section>
  )
}

export default UserProfile