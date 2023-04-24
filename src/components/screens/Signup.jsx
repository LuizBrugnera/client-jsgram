import React from 'react'
import '../css/main.css'

const Singup = () => {
  return (
    <section id='signup'>
    <h1 className='title_signup'>Cadastrar</h1>
      <form>
        <input className='input_signup' type="text" name="user" placeholder='Nome' required/>
        <input className='input_signup' type="password" name="password" placeholder='Senha' required/>
        <input className='input_signup' type="password" name="password" placeholder='Confirmar Senha' required/>
        <button className='button_signup' type='submit'>Entrar</button>
      </form>
    </section>
  )
}

export default Singup