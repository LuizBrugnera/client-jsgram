import React, {useState} from "react";
import axios from "axios";

const ButtonEditPost = ({codigo, imagem, descricao, usuario, url, recuperaPosts}) => {
  const handlerEditPost = async (e) => {
    e.preventDefault();

    if (codigo && imagem && descricao) {
        if(editImg) imagem = editImg;
        if(editDesc) descricao = editDesc;
        console.log(editImg);
        console.log(editDesc);
      const post = {
        codigo,
        imagem,
        descricao,
        usuario
      };
      console.log(post)
      await axios.put(`${url}/posts/`, post);
      await recuperaPosts();
    }
  };

  const [form, setForm] = useState(false);
  const [editImg, setEditImg] = useState('');
  const [editDesc, setEditDesc] = useState('');

  const handlerFormEdit = () => {
    setForm(!form);
    };
  return <>
    <div onClick={handlerFormEdit} className="click-div">
    edit
    </div>
    {form && (
        <form>
            <input id='imagem' className='input_signup' type="text" name="text" placeholder='imagem' onChange={(e) => setEditImg(e.target.value)} />
            <input id='descricao' className='input_signup' type="text" name="text" placeholder='descricao' onChange={(e) => setEditDesc(e.target.value)} />
            <button className='button_change' type='submit' onClick={handlerEditPost}>Edit Post</button>
        </form>
    )}
  </>
  
};

export default ButtonEditPost;
