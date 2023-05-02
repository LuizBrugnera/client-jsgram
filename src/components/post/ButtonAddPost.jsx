import React from 'react'
import axios from 'axios'


const ButtonAddPost = ({recuperaPosts, url, userId}) => {
    const handlerAddPost = async (e) => {
        e.preventDefault();
    
        const imagem = document.querySelector('#imagem').value;
        const descricao = document.querySelector('#descricao').value;
        
        if (imagem && descricao) {
          const post = {
            imagem,
            descricao,
            usuario: userId,
          };
    
          await axios.post(`${url}/posts`, post);
          await recuperaPosts();
        }
      };
  return (
    <>
        <input id='imagem' className='input_signup' type="text" name="text" placeholder='imagem' required/>
        <input id='descricao' className='input_signup' type="text" name="text" placeholder='descricao' required/>
        <button className='button_change' type='submit' onClick={handlerAddPost}>Add Post</button>
    </>
  )
}

export default ButtonAddPost