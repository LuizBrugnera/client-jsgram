import React from 'react'

const ButtonSignup = ({handlerChangeImgP}) => {
  return (
    <>
        <input id='fotoPerfil' className='input_signup' type="text" name="text" placeholder='url fotoPerfil' required/>
        <button className='button_change' type='submit' onClick={handlerChangeImgP}>Trocar Foto</button>
    </>
  )
}

export default ButtonSignup