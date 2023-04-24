import React from 'react'

import '../css/main.css'

const UserLogin = ({handlerLogin}) => {

  return (
    <section id='login'>
      <h1 className='title_login'>Login</h1>
      <form>
        <input id='userName' className='input_login' type="text" name="user" placeholder='Nome'/>
        <input id='password' className='input_login' type="password" name="password" placeholder='Senha'/>
        <button className='button_login' type='submit' onClick={handlerLogin}>Entrar</button>
      </form>
    </section>
  )
}

export default UserLogin