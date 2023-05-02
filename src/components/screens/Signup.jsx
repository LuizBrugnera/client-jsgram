import React from 'react'
import '../css/main.css'
import User from '../user/User'

const Singup = () => {
  return (
    <section id='signup'>
    <h1 className='title_signup'>Cadastrar</h1>
      <form>
        <input id='userName' className='input_signup' type="text" name="user" placeholder='Nome' required/>
        <input id='password' className='input_signup' type="password" name="password" placeholder='Senha' required/>
        <input id='fotoPerfil' className='input_signup' type="text" name="text" placeholder='url fotoPerfil' required/>
        <User screen="buttonS"/>
      </form>
    </section>
  )
}

export default Singup