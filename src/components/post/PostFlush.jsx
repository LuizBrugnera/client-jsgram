import React from "react";
import { useContext } from "react";
import PostContext from "./PostContext";

import '../css/main.css'
import '../../assets/user.png'

const PostFlush = () => {
  const { listaPosts } = useContext(PostContext);
  return (
    <section>
      {listaPosts.length === 0 &&
        <h1>Carregando...</h1>}

      {listaPosts.length > 0 &&
        <ul className="feed_conteiner">
          <img src=""></img>
          {listaPosts.map((post) => (
            <li key={post.codigo} className="post">
              <p className="p_post">
                <img className="img_perfil_post" src={post.usuario.fotoperfil} alt="foto do perfil" />  <a className="user_name rel" href="profile">{post.usuario.nome}</a>
              </p>
              <div className="conteiner_img">
                <img className="img_post" src={post.imagem} alt="imagem da postagem" />
              </div>
              <p><a className="user_name" href="profile">{post.usuario.nome}</a> : {post.descricao}</p>
            </li>
          ))}
        </ul>
      }
    </section>
  );
};

export default PostFlush;
