import React from 'react';
import '../css/main.css';
const Home = () => {
  return (
    <section id='home'>
      <h1 className='home_title'>JSGRAM</h1>
      <p className='home_text'>Entre em nossa Rede social para ver e postar fotos</p>
      <p className='home_text'>Caso tenha uma conta, para fazer o login, clique no Botão abaixo</p>
      <a href="/login" className='button_fr'>Entrar</a>
      <p className='home_text'>Caso não tenha uma conta, para fazer cadastro, clique no Botão abaixo</p>
      <a href="/signup" className='button_fr'>Cadastrar-se</a>
    </section>
  )
}

export default Home