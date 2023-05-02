import React from 'react'

const ButtonSignup = ({handlerSubmitSignup}) => {
  return (
    <>
        <button className='button_signup' type='submit' onClick={handlerSubmitSignup}>Entrar</button>
    </>
  )
}

export default ButtonSignup