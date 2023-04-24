import React from 'react'

import '../css/main.css'

import Post from '../post/Post'
const UserProfile = ({myUser}) => {

  return (
    <section id='profile'>
        <h1 className='title_profile'>Perfil</h1>
        <div className='profile_conteiner'>
            <img src={myUser.fotoperfil} alt="Foto de perfil"/>
            <span className='profile_name'>{myUser.nome}Nome</span>
        </div>
        <Post userId={myUser.codigo}/>
    </section>
  )
}

export default UserProfile