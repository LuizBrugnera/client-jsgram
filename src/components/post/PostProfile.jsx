import React from "react";
import { useContext } from "react";
import PostContext from "./PostContext";

import '../css/main.css'


const PostProfile = ({userId}) => {
  const {listaPosts} = useContext(PostContext);
  console.log(listaPosts)
  console.log(userId)
  const UserPosts = listaPosts.filter((post) => post.usuario.codigo === userId);
  console.log(UserPosts)
  return (
      <section>
        {UserPosts.length === 0 &&
        <h1>Carregando...</h1>}

       {UserPosts.length > 0 &&
        <ul className="profile_conteiner">
          {UserPosts.map((post) => (
            <li key={post.codigo} className="profile_post">
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

export default PostProfile;
